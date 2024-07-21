'use client';

import React, { useEffect, useState } from 'react';
import StudentCard from '../StudentCard/StudentCard';
import { Student } from '@/types/student';
import styles from './StudentList.module.css';
import { getStudents } from '@/lib/firestore';

const StudentList: React.FC = () => {
	const [students, setStudents] = useState<Student[]>([]);

	useEffect(() => {
		const fetchStudents = async () => {
			const studentsData: Student[] = await getStudents();
			setStudents(studentsData);
		};

		// studentsCache = students;
		fetchStudents();
	}, []);

	return (
		<div className={styles.userList}>
			{students.map((student) => (
				<StudentCard key={student.id} student={student} />
			))}
		</div>
	);
};

export default StudentList;
