import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import Header from '@/components/Header/Header';
import styles from './research.module.css';

interface Research {
	title: string;
	authors: string;
	date: string;
}

const ResearchDetail = (): React.JSX.Element => {
	const [research, setResearch] = useState<Research | null>(null);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		const fetchResearch = async () => {
			if (id) {
				const docRef = doc(db, 'researches', id as string);
				const docSnap = await getDoc(docRef);
				if (docSnap.exists()) {
					setResearch(docSnap.data() as Research);
				} else {
					console.log('No such document!');
				}
			}
		};
		fetchResearch();
	}, [id]);

	if (!research) return <div>Loading...</div>;

	return (
		<div>
			<Header />
			<div className={styles.container}>
				<h1>{research.title}</h1>
				<p>Authors: {research.authors}</p>
				<p>Date: {research.date}</p>
				```typescript
			</div>
		</div>
	);
};

export default ResearchDetail;
