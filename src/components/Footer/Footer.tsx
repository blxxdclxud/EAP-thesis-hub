import React from 'react';
import styles from './Footer.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.contactInfo}>
				<h3>Contact Us</h3>
				<div className={styles.contactItem}>
					<a
						href="mailto:r.nazmiev@innopolis.university.com"
						className={styles.contactLink}
					>
						<i className="fas fa-envelope"></i> r.nazmiev@innopolis.university.com
					</a>
				</div>
				<div className={styles.contactItem}>
					<a
						href="https://t.me/ssstaticmethod"
						className={styles.contactLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-telegram"></i> @ssstaticmethod
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
