import React from 'react';

const LoginForm = () => {
	return (
		<div className="login-form">
			<h1>Log in</h1>
			<form>
				<label htmlFor="email">email</label>
				<input type="email" id="email" name="email" required />

				<label htmlFor="password">password</label>
				<input type="password" id="password" name="password" required />

				<div className="form-footer">
					<a href="#">Forgot password?</a>
					<button type="submit">Log in</button>
				</div>
			</form>
			<button className="signup-button">Sign up</button>
		</div>
	);
};

export default LoginForm;
