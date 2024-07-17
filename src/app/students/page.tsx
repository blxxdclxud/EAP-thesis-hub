import React from 'react';
import Header from '@/components/Header';
import UserList from '@/components/UserList';
import { User } from '@/types/user';

const users: User[] = [
	{ id: 1, name: 'Ivan Ivanov', project: 'Artificial Intelligence in microwave ovens' },
	{ id: 2, name: 'Petr Petrov', project: 'Thesis supervision Gamified System Design' },
	{ id: 3, name: 'Oleg Olegov', project: 'The solver of quadratic equations' },
	{ id: 4, name: 'Ivan Ivanov', project: 'Artificial Intelligence in microwave ovens' },
	{ id: 5, name: 'Ivan Ivanov', project: 'Artificial Intelligence in microwave ovens' },
];

const DashboardPage = () => {
	return (
		<div>
			<Header />
			<UserList users={users} />
		</div>
	);
};

export default DashboardPage;
