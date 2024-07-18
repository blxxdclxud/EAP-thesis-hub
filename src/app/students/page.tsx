'use client';

import Header from '@/components/Header';
import StudentList from '@/components/StudentList';
import React, { useEffect, useState } from 'react';
import { Student } from '@/types/student';
import { getStudents } from '../../lib/firestore';

// let studentsCache: Student[] | null = [];

const StudentsPage = () => {
	const [students, setStudents] = useState<Student[]>([]);

	useEffect(() => {
		const fetchStudents = async () => {
			const studentsData = await getStudents();
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
