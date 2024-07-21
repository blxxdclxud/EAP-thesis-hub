import Header from '@/components/Header/Header';
import StudentList from '@/components/StudentList/StudentList';
import React from 'react';

export const metadata = {
	title: 'All Students',
	description:
		'Here are listed all students registered in the system. ' +
		'Click `View details` to check information about one of them.',
};

const StudentsPage = (): React.JSX.Element => {
	return (
		<div>
			<Header />
			<StudentList />
		</div>
	);
};

export default StudentsPage;
