'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './Home.module.css';

const Home: React.FC = () => {
	useEffect(() => {
		document.body.classList.add('img-body');

		return () => {
			document.body.classList.remove('img-body');
		};
	}, []);

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h2 className={styles.title}>EAP Thesis Hub</h2>
				<nav className={styles.nav}>
					<Link href="/about" className={styles.navLink}>
						About
					</Link>
				</nav>
			</header>
			<div className={styles.mainContent}>
				<h1>Work easier and collaborate together.</h1>
				<p>
					EAP Thesis Hub simplifies the process of collaboration with supervisor for
					students.
				</p>
				<div className={styles.buttonContainer}>
					<Link href="/login" className={`${styles.button} ${styles.loginButton}`}>
						Log In
					</Link>
					<Link href="/signup" className={`${styles.button} ${styles.signupButton}`}>
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
