import React from 'react';
import StudentCard from './StudentCard';
import { Student } from '@/types/student';

interface UserListProps {
	students: Student[];
}

const StudentList: React.FC<UserListProps> = ({ students }) => {
	return (
		<div className="user-list">
			{students.map((student) => (
				<StudentCard key={student.id} student={student} />
			))}
		</div>
	);
};

export default StudentList;
