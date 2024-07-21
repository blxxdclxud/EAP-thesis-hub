'use client';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useRouter } from 'next/navigation';
import styles from './LoginForm.module.css';
import { getStudentByToken } from '@/lib/firestore';
import Cookies from 'js-cookie';
import { UserCredential } from 'firebase/auth';
import { Student } from '@/types/student';
const LoginForm: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');
	const router = useRouter();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const userCredential: UserCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password,
			);
			const token = (await userCredential.user.uid) as string;

			console.log('TOKE', token);

			const studentData: Student = await getStudentByToken(token as string);

			Cookies.set('token', token);
			Cookies.set('id', studentData.id as string);
			Cookies.set('name', studentData.name);

			router.push('/students');
		} catch (err) {
			setError('Failed to log in. Please check your email and password.');
		}
	};

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleLogin}>
				<h2>Log in</h2>
				<div className={styles.inputContainer}>
					<input
						type="email"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={styles.input}
					/>
				</div>
				<div className={styles.inputContainer}>
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className={styles.input}
					/>
				</div>
				<div className={styles.forgotPassword}>
					<a href="#">Forgot password?</a>
				</div>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<button type="submit" className={styles.button}>
					Log in
				</button>
				<a href="/signup" className={styles.link}>
					Sign up
				</a>
			</form>
		</div>
	);
};

export default LoginForm;
