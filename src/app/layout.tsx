import React from 'react';
import '../styles/globals.css';
import ico from '../../public/favicon.ico';

export const metadata = {
	icon: ico,
	authors: [
		{ name: 'Ramazan Nazmiev' },
		{ name: 'Rail Sharipov' },
		{ name: 'Urvatullo Atoev' },
		{ name: 'Aidar Sarvartdinov' },
		{ name: 'Karen Mobley' },
	],
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default Layout;
