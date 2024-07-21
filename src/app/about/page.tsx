import React from 'react';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';

export const metadata = {
	title: 'About Page',
	description:
		'Page provides short information about EAP Thesis Hub. Sign up in the system or log in.',
};

const AboutPage = (): React.JSX.Element => {
	return (
		<>
			<Header />
			<About />
			<Footer />
		</>
	);
};

export default AboutPage;
