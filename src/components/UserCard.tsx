import React from 'react';
import Link from 'next/link';
import { User } from '@/types/user';

interface UserCardProps {
	user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
	return (
		<div className="user-card">
			<div className="profile-placeholder"></div>
			<h2>{user.name}</h2>
			<p>Project: {user.project}</p>
			<Link href={`/students/${user.id}`}>
				<button>View Details</button>
			</Link>
		</div>
	);
};

export default UserCard;
