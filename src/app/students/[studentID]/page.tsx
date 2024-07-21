'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header/Header';
import StudentDetailsPage from '@/components/StudentDetails/StudentDetails';
import { Student } from '@/types/student';
import { getStudentById } from '@/lib/firestore';

const StudentPage = (): React.JSX.Element | null => {
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
		<div>
			<Header />
			<StudentDetailsPage student={student} />
		</div>
	);
};

export default StudentPage;
