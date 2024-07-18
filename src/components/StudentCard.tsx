import React from 'react';
import Link from 'next/link';
import { Student } from '@/types/student';

interface UserCardProps {
	student: Student;
}

const StudentCard: React.FC<UserCardProps> = ({ student }) => {
	return (
		<div className="user-card">
			<div className="profile-placeholder"></div>
			<h2>{student.name}</h2>
			<p>About: {student.about}</p>
			<Link href={`/students/${student.id}`}>
				<button>View Details</button>
			</Link>
		</div>
	);
};

export default StudentCard;
