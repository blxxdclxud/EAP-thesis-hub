'use client';

import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import styles from './Researches.module.css';

interface Research {
	id?: string;
	title: string;
	authors: string;
	date: string;
}

const ResearchList = () => {
	const [researches, setResearches] = useState<Research[]>([]);
	const [newResearch, setNewResearch] = useState<Research>({ title: '', authors: '', date: '' });
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const fetchData = async () => {
			const querySnapshot = await getDocs(collection(db, 'researches'));
			const data = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			})) as Research[];
			setResearches(data);
		};
		fetchData();
	}, []);

	const handleAdd = async () => {
		if (!newResearch.title || !newResearch.authors || !newResearch.date) {
			setError('All fields are required');
			return;
		}
		setError('');
		try {
			const docRef = await addDoc(collection(db, 'researches'), newResearch);
			setResearches([...researches, { id: docRef.id, ...newResearch }]);
			setNewResearch({ title: '', authors: '', date: '' });
		} catch (error) {
			setError('Error adding research: ' + error.message);
		}
	};

	const handleDelete = async (id: string | undefined) => {
		if (id) {
			try {
				await deleteDoc(doc(db, 'researches', id));
				setResearches(researches.filter((research) => research.id !== id));
			} catch (error) {
				setError('Error deleting research: ' + error.message);
			}
		}
	};

	const handleChange = (index: number) => {
		return index;
		// Handle change research logic here
	};

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div>
					<input
						type="text"
						placeholder="Title"
						value={newResearch.title}
						onChange={(e) => setNewResearch({ ...newResearch, title: e.target.value })}
					/>
					<input
						type="text"
						placeholder="Authors"
						value={newResearch.authors}
						onChange={(e) =>
							setNewResearch({ ...newResearch, authors: e.target.value })
						}
					/>
					<input
						type="date"
						value={newResearch.date}
						onChange={(e) => setNewResearch({ ...newResearch, date: e.target.value })}
					/>
					<button className={styles.addButton} onClick={handleAdd}>
						Add research
					</button>
					{error && <p className={styles.error}>{error}</p>}
				</div>
				{researches.map((research, index) => (
					<div key={research.id} className={styles.research}>
						<h2>{research.title}</h2>
						<p>Authors: {research.authors}</p>
						<p>Date: {research.date}</p>
						<button className={styles.changeButton} onClick={() => handleChange(index)}>
							Change research
						</button>
						<button
							className={styles.deleteButton}
							onClick={() => handleDelete(research.id)}
						>
							Delete research
						</button>
					</div>
				))}
			</main>
		</div>
	);
};

export default ResearchList;
