import React from 'react';
import Home from '@/components/Home/Home';
import Footer from '@/components/Footer/Footer';

export const metadata = {
	title: 'Home Page',
	description:
		'Welcome to EAP Thesis Hub home page. Click `About` for more information or Sign up in the system.',
};

const HomePage = (): React.JSX.Element => {
	return (
		<>
			<Home />
			<Footer />
		</>
	);
};

export default HomePage;
