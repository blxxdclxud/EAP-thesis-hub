'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import StudentDetailsPage from '@/components/StudentDetails';
import { Student } from '@/types/student';
import { getStudentById } from '@/lib/firestore';

const StudentPage = () => {
	const params = useParams();
	const studentID = params.studentID;
	console.log(studentID);

	// const router = useRouter();
	// const { studentID } = router.query;
	const [student, setStudent] = useState<Student | null>(null);

	useEffect(() => {
		if (studentID) {
			const fetchStudent = async () => {
				try {
					const studentData = await getStudentById(studentID as string);
					setStudent(studentData);
				} catch (error) {
					console.error(error.message);
				}
			};

			fetchStudent();
		}
	}, [studentID]);

	if (!student) {
		return;
	}

	return (
		<div>
			<Header />
			<StudentDetailsPage student={student} />
		</div>
	);
};

export default StudentPage;
