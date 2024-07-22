import React from 'react';
import '../styles/globals.css';

export const metadata = {
	icons: {
		icon: './favicon.ico',
	},
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
