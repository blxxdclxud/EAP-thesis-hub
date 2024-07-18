import Header from '@/components/Header';
import React from 'react';
import {Student} from '@/types/student';

interface UserDetailsProps {
    student: Student;
}

const StudentDetailsPage: React.FC<UserDetailsProps> = ({student}) => {
    return (
        <>
            <Header/>
            <div>
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
        </>

    );
};

export default StudentDetailsPage;
