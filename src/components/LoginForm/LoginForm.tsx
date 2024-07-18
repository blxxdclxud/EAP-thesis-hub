'use client';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useRouter } from 'next/navigation';
import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
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
