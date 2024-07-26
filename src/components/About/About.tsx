// About.tsx
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from './About.module.css';

const About: React.FC = () => {
	useEffect(() => {
		document.body.classList.add('img-body');

		return () => {
			document.body.classList.remove('img-body');
		};
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.mainContent}>
				<h1>About Us</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum orci et
					efficitur dapibus. Vivamus euismod purus sed felis hendrerit, eget pharetra dui
					eleifend. Morbi ac pharetra mi. Sed vehicula, velit vel auctor ultricies, lacus
					urna suscipit tortor, in bibendum ligula odio ac purus. Vestibulum ut velit at
					dolor pretium feugiat. Donec tristique sem vel libero consectetur varius.
				</p>
				<div className={styles.buttonContainer}>
					<Link href="/" className={`${styles.button} ${styles.loginButton}`}>
						Back to Home
					</Link>
				</div>
			</div>
			{/* Footer component here, assuming it's included at the bottom of the container */}
		</div>
	);
};

export default About;
