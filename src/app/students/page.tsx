'use client';

import Header from '@/components/Header/Header';
import StudentList from '@/components/StudentList/StudentList';
import React, { useEffect, useState } from 'react';
import { Student } from '@/types/student';
import { getStudents } from '../../lib/firestore';

const StudentsPage = (): React.JSX.Element => {
	const [students, setStudents] = useState<Student[]>([]);

	useEffect(() => {
		const fetchStudents = async () => {
			const studentsData: Student[] = await getStudents();
			setStudents(studentsData);
		};

		// studentsCache = students;
		fetchStudents();
	}, []);

	console.log(students);

	return (
		<div>
			<Header />
			<StudentList students={students} />
		</div>
	);
};

export default StudentsPage;
