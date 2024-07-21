import React from 'react';
import StudentCard from '../StudentCard/StudentCard';
import { Student } from '@/types/student';
import styles from './StudentList.module.css';

interface UserListProps {
	students: Student[];
}

const StudentList: React.FC<UserListProps> = ({ students }) => {
	return (
		<div className={styles.userList}>
			{students.map((student) => (
				<StudentCard key={student.id} student={student} />
			))}
		</div>
	);
};

export default StudentList;
