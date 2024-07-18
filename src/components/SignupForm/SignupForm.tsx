import React, { useState } from 'react';
import styles from './SignupForm.module.css';
import { useRouter } from 'next/router';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

interface Student {
	name: string;
	email: string;
	number: string;
	about: string;
	labs: string[];
	works: string[];
}

const SignupForm: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');
	const [number, setNumber] = useState('');
	const [about, setAbout] = useState('');
	const [labs, setLabs] = useState<string[]>(['']);
	const [works, setWorks] = useState<string[]>(['']);
	const [error, setError] = useState('');
	const router = useRouter();

	const handleSignup = async (event: React.FormEvent) => {
		event.preventDefault();

		if (password !== passwordConfirmation) {
			setError('Passwords do not match');
			return;
		}

		try {
			// const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			// const user = userCredential.user;

			const student: Student = {
				name,
				email,
				number,
				about,
				labs,
				works,
			};

			await addDoc(collection(db, 'students'), student);

			console.log('User and student document created successfully');
			router.push('/dashboard');
		} catch (error) {
			console.error('Error signing up:', error);
			setError('Failed to sign up');
		}
	};

	const handleLabChange = (index: number, value: string) => {
		const newLabs = [...labs];
		newLabs[index] = value;
		setLabs(newLabs);
	};

	const handleWorkChange = (index: number, value: string) => {
		const newWorks = [...works];
		newWorks[index] = value;
		setWorks(newWorks);
	};

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSignup}>
				<h2>Sign Up</h2>
				{error && <p className={styles.error}>{error}</p>}
				<div className={styles.inputContainer}>
					<input
						type="text"
						placeholder="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						className={styles.input}
					/>
				</div>
				<div className={styles.inputContainer}>
					<input
						type="email"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className={styles.input}
					/>
				</div>
				<div className={styles.inputContainer}>
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className={styles.input}
					/>
				</div>
				<div className={styles.inputContainer}>
					<input
						type="password"
						placeholder="password confirmation"
						value={passwordConfirmation}
						onChange={(e) => setPasswordConfirmation(e.target.value)}
						required
						className={styles.input}
					/>
				</div>
				<div className={styles.inputContainer}>
					<input
						type="text"
						placeholder="number"
						value={number}
						onChange={(e) => setNumber(e.target.value)}
						required
						className={styles.input}
					/>
				</div>
				<div className={styles.inputContainer}>
					<textarea
						placeholder="about"
						value={about}
						onChange={(e) => setAbout(e.target.value)}
						required
						className={styles.textarea}
					/>
				</div>
				<div className={styles.inputContainer}>
					<label>Labs:</label>
					{labs.map((lab, index) => (
						<input
							key={index}
							type="text"
							placeholder="Lab name"
							value={lab}
							onChange={(e) => handleLabChange(index, e.target.value)}
							required
							className={styles.input}
						/>
					))}
				</div>
				<div className={styles.inputContainer}>
					<label>Works:</label>
					{works.map((work, index) => (
						<input
							key={index}
							type="text"
							placeholder="Work title"
							value={work}
							onChange={(e) => handleWorkChange(index, e.target.value)}
							required
							className={styles.input}
						/>
					))}
				</div>
				<button type="submit" className={styles.button}>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignupForm;
