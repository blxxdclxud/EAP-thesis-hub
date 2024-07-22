'use client';

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
import styles from './Header.module.css';

const Header: React.FC = () => {
	const handleLogout = () => {
		Cookies.remove('id');
		Cookies.remove('token');
	};

	return (
		<header className={styles.header}>
			<div className={styles.pic}>
				<Link href={'/'}>
					<FontAwesomeIcon icon={faHouse} className={styles.homeIcon} />
				</Link>
			</div>

			<nav className={styles.nav}>
				<Link href="/about">About</Link>
				<Link href="/researches">Researches</Link>
				<Link href="/students">Your Students</Link>
				<Link href="/profile">Profile</Link>
			</nav>

			<div className={styles.logout}>
				<a href="/login" onClick={handleLogout}>
					<FontAwesomeIcon icon={faSignOutAlt} className={styles.logoutIcon} />
				</a>
			</div>
		</header>
	);
};

export default Header;
