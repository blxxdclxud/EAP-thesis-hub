import React from 'react';
import SignupForm from '@/components/SignupForm/SignupForm';

export const metadata = {
	title: 'Sign Up',
	description: "This is sign up page. Enter your new account's data and enter the system.",
};

const HomePage = (): React.JSX.Element => {
	return <SignupForm />;
};

export default HomePage;
