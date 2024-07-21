import React from 'react';
import LoginForm from '@/components/LoginForm/LoginForm';

export const metadata = {
	title: 'Log in',
	description: "This is log in page. Enter your existing account's data and enter the system.",
};

const LoginPage = (): React.JSX.Element => {
	return (
		<div className="login-page">
			<LoginForm />
		</div>
	);
};

export default LoginPage;
