import React from 'react';
import UserCard from './UserCard';
import { User } from '@/types/user';

interface UserListProps {
	users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
	return (
		<div className="user-list">
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	);
};

export default UserList;
