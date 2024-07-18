'use client';

import React, { useState } from 'react';
import { addStudent } from '@/lib/firestore';

const AddStudentForm: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [number, setNumber] = useState<string>('');
	const [about, setAbout] = useState<string>('');
	const [labs] = useState<string[]>([]);
	const [works] = useState<string[]>([]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await addStudent({ name, email, number, about, labs, works });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Number"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<textarea
				placeholder="About"
				value={about}
				onChange={(e) => setAbout(e.target.value)}
			/>
			<button type="submit">Add Student</button>
		</form>
	);
};

export default AddStudentForm;
