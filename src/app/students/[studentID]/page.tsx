'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import { User } from '@/types/user';

const students: User[] = [
	{
		id: 1,
		name: 'Ivan Ivanov',
		email: 'i.ivanov@innopolis.university',
		number: '8 800 535-35-35',
		about: "I'm from Russia. I graduated from the 9th grade of school and then came to work at Innopolis University. I work in a robotics lab. My dream is to create a robot that cannot be distinguished from a human.",
		labs: ['Theoretical robotics', 'An example of some long lab name related to robotics'],
		works: [
			'How robot vacuum cleaners affect people.',
			'The future of robots. Risks and opportunities. Will robots replace humans in the future.',
		],
	},
	{
		id: 2,
		name: 'Petr Petrov',
		email: 'p.petrov@innopolis.university',
		number: '8 800 535-35-35',
		about: "I'm from Russia. I graduated from the 9th grade of school and then came to work at Innopolis University. I work in a robotics lab. My dream is to create a robot that cannot be distinguished from a human.",
		labs: ['Theoretical robotics', 'An example of some long lab name related to robotics'],
		works: [
			'How robot vacuum cleaners affect people.',
			'The future of robots. Risks and opportunities. Will robots replace humans in the future.',
		],
	},
	{
		id: 3,
		name: 'Oleg Olegov',
		email: 'o.olegov@innopolis.university',
		number: '8 800 535-35-35',
		about: "I'm from Russia. I graduated from the 9th grade of school and then came to work at Innopolis University. I work in a robotics lab. My dream is to create a robot that cannot be distinguished from a human.",
		labs: ['Theoretical robotics', 'An example of some long lab name related to robotics'],
		works: [
			'How robot vacuum cleaners affect people.',
			'The future of robots. Risks and opportunities. Will robots replace humans in the future.',
		],
	},
	{
		id: 4,
		name: 'Ivan Ivanov',
		email: 'i.ivanov@innopolis.university',
		number: '8 800 535-35-35',
		about: "I'm from Russia. I graduated from the 9th grade of school and then came to work at Innopolis University. I work in a robotics lab. My dream is to create a robot that cannot be distinguished from a human.",
		labs: ['Theoretical robotics', 'An example of some long lab name related to robotics'],
		works: [
			'How robot vacuum cleaners affect people.',
			'The future of robots. Risks and opportunities. Will robots replace humans in the future.',
		],
	},
	{
		id: 5,
		name: 'Ivan Ivanov',
		email: 'i.ivanov@innopolis.university',
		number: '8 800 535-35-35',
		about: "I'm from Russia. I graduated from the 9th grade of school and then came to work at Innopolis University. I work in a robotics lab. My dream is to create a robot that cannot be distinguished from a human.",
		labs: ['Theoretical robotics', 'An example of some long lab name related to robotics'],
		works: [
			'How robot vacuum cleaners affect people.',
			'The future of robots. Risks and opportunities. Will robots replace humans in the future.',
		],
	},
];

const StudentPage = () => {
	const params = useParams();
	const studentID = params.studentID;

	const student = students.find((student) => student.id.toString() === studentID);

	if (!student) {
		return <div>Student not found</div>;
	}

	return (
		<div>
			<Header />
			<div className="student-details">
				<div className="profile-placeholder"></div>
				<h1>{student.name}</h1>
				<p>Email: {student.email}</p>
				<p>Number: {student.number}</p>
				<p>About me: {student.about}</p>
				<h2>Labs</h2>
				{student.labs.map((lab, index) => (
					<div key={index} className="lab-item">
						{lab}
					</div>
				))}
				<h2>Works</h2>
				{student.works.map((work, index) => (
					<div key={index} className="work-item">
						{work}
					</div>
				))}
			</div>
		</div>
	);
};

export default StudentPage;
