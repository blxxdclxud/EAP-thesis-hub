'use client';

import React, { useEffect, useState } from 'react';
import { Student } from '@/types/student';
import styles from './StudentDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'next/navigation';
import { getStudentById } from '@/lib/firestore';

const StudentDetailsPage: React.FC = () => {
	const params = useParams();
	const studentID: string = params.studentID as string;
	console.log(studentID);

	const [student, setStudent] = useState<Student | null>(null);

	useEffect((): void => {
		if (studentID) {
			const fetchStudent = async (): Promise<void> => {
				try {
					const studentData: Student = await getStudentById(studentID as string);
					setStudent(studentData);
				} catch (error) {
					console.error((error as Error).message);
				}
			};

			fetchStudent();
		}
	}, [studentID]);

	if (!student) {
		return null;
	}

	return (
		<>
			<div>
				<div className={styles.studentDetails}>
					<div className={styles.profilePlaceholder}>
						<FontAwesomeIcon
							icon={faUserGraduate}
							style={{ color: '#088c1e', width: '70%', height: '70%' }}
						/>
					</div>
					<h1 className={styles.h1}>{student.name}</h1>
					<p className={styles.p}>Email: {student.email}</p>
					<p className={styles.p}>Number: {student.number}</p>
					<p className={styles.p}>About me: {student.about}</p>
					<h2 className={styles.h2}>Works</h2>
					{student.works.map((work, index) => (
						<div key={index} className={styles.workItem}>
							{work.title}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default StudentDetailsPage;
