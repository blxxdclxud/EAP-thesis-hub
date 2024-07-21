import React from 'react';
import { Student } from '@/types/student';
import styles from './StudentDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

interface UserDetailsProps {
	student: Student;
}

const StudentDetailsPage: React.FC<UserDetailsProps> = ({ student }) => {
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
