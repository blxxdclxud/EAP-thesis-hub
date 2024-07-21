'use client';

import React, { useState } from 'react';
import styles from './SignupForm.module.css';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, AuthError } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Work } from '../../types/work';
import { Student } from '../../types/student';
import { parsePhoneNumber, isValidPhoneNumber, PhoneNumber } from 'libphonenumber-js';
import Cookies from 'js-cookie';
import { UserCredential } from 'firebase/auth';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SignupForm: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');
	const [number, setNumber] = useState('');
	const [about, setAbout] = useState('');
	const [works, setWorks] = useState<Work[]>([{ title: '' }]);
	const [error, setError] = useState('');
	const router = useRouter();

	const handleSignup = async (event: React.FormEvent) => {
		event.preventDefault();

		if (password !== passwordConfirmation) {
			setError('Passwords do not match');
			return;
		}
		try {
			let phoneNumber: PhoneNumber;
			try {
				phoneNumber = parsePhoneNumber(number);
			} catch (e: unknown) {
				setError('Invalid phone number');
				return;
			}

			if (!isValidPhoneNumber(phoneNumber.number)) {
				setError('Invalid phone number');
				return;
			}

			const userCredential: UserCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			);
			const token = (await userCredential.user.uid) as string;

			const student: Student = {
				token: token,
				name,
				email,
				number,
				about,
				works,
			};

			const docRef = await addDoc(collection(db, 'students'), student);
			const studentId = docRef.id;
			console.log('User and student document created successfully with ID:', studentId);

			Cookies.set('token', token);
			Cookies.set('id', studentId);
			Cookies.set('name', name);

			router.push('/students');
		} catch (error) {
			if ((error as AuthError).code === 'auth/email-already-in-use') {
				setError('The email address is already in use by another account.');
			} else {
				console.error('Error signing up:', error);
				setError('Failed to sign up');
			}
		}
	};

	const handleWorkChange = (index: number, value: string) => {
		const newWorks = [...works];
		newWorks[index].title = value;
		setWorks(newWorks);
	};

	const addNewWork = () => setWorks([...works, { title: '' }]);
	const removeLastWork = () => setWorks(works.slice(0, -1));

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSignup}>
				<h2>Sign Up</h2>
				{error && <p className={styles.error}>{error}</p>}
				<div className={styles.inputContainer}>
					<input
						type="text"
						id="name"
						placeholder=" "
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						className={styles.input}
					/>
					<label htmlFor="name">Name</label>
				</div>

				<div className={styles.inputContainer}>
					<input
						type="email"
						id="email"
						placeholder=" "
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className={styles.input}
					/>
					<label htmlFor="email">Email</label>
				</div>

				<div className={styles.inputContainer}>
					<input
						type="password"
						id="password"
						placeholder=" "
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className={styles.input}
					/>
					<label htmlFor="password">Password</label>
				</div>

				<div className={styles.inputContainer}>
					<input
						type="password"
						id="passwordConfirmation"
						placeholder=" "
						value={passwordConfirmation}
						onChange={(e) => setPasswordConfirmation(e.target.value)}
						required
						className={styles.input}
					/>
					<label htmlFor="passwordConfirmation">Confirm Password</label>
				</div>

				<div className={styles.inputContainer}>
					<input
						type="text"
						id="number"
						placeholder=" "
						value={number}
						onChange={(e) => setNumber(e.target.value)}
						required
						className={styles.input}
					/>
					<label htmlFor="number">Phone Number</label>
				</div>

				<div className={styles.inputContainer}>
					<textarea
						id="about"
						placeholder=" "
						value={about}
						onChange={(e) => setAbout(e.target.value)}
						required
						className={styles.textarea}
					/>
					<label htmlFor="about">About</label>
				</div>
				<div className={styles.worksContainer}>
					<label className={styles.worksLabel}>Works:</label>
					{works.map((work, index) => (
						<div key={index} className={styles.workInputContainer}>
							<input
								type="text"
								id={`work-${index}`}
								placeholder=" "
								value={work.title}
								onChange={(e) => handleWorkChange(index, e.target.value)}
								required
								className={styles.workInput}
							/>
							<label htmlFor={`work-${index}`}>Work title</label>
						</div>
					))}
					<div className={styles.workButtons}>
						<button type="button" onClick={addNewWork} className={styles.addButton}>
							<i className="fas fa-plus"></i> {/* FontAwesome + icon */}
						</button>
						<button
							type="button"
							onClick={removeLastWork}
							className={styles.removeButton}
						>
							<i className="fas fa-minus"></i> {/* FontAwesome - icon */}
						</button>
					</div>
				</div>
				<button type="submit" className={styles.button}>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignupForm;
