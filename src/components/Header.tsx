import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
	return (
		<header>
			<div className="header">
				<div className="profile-placeholder"></div>
				<span>Name Surname</span>
			</div>
			<nav>
				<Link href="/notifications">Notifications</Link>
				<Link href="/researches">Researches</Link>
				<Link href="/students">Your Students</Link>
				<Link href="/profile">Profile</Link>
			</nav>
		</header>
	);
};

export default Header;
