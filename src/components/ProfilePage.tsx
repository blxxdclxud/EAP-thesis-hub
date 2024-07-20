import React, { useState, useEffect } from 'react';
import Header from './Header';

const ProfilePage: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [about, setAbout] = useState<string>("I'm from Pakistan. I graduated from the 9th grade of school and then came to work at Innopolis University. I work in a robotics lab. My dream is to create a robot that cannot be distinguished from a human");

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        const storedEmail = localStorage.getItem('email');
        const storedNumber = localStorage.getItem('number');

        if (storedName) setName(storedName);
        if (storedEmail) setEmail(storedEmail);
        if (storedNumber) setNumber(storedNumber);
    }, []);

    const handleSave = () => {
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('number', number);
        alert('Profile saved!');
    };

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    };

    const labs = ['Theoretical robotics', 'An example of some long lab name related to robotics'];
    const works = ['How robot vacuum cleaners affect people.', 'The future of robots. Risks and opportunities. Will robots replace humans in the future.'];

    return (
        <>
            <Header />
            <div className="profile-container">
                <div className="profile">
                    <div className="profile-placeholder"></div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <textarea
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                    />
                    <button onClick={handleSave}>Save Profile</button>
                    <button onClick={handleLogout}>Log Out</button>
                    <h2>Labs</h2>
                    {labs.map((lab, index) => (
                        <div key={index} className="lab-item">
                            {lab}
                        </div>
                    ))}
                    <h2>Works</h2>
                    {works.map((work, index) => (
                        <div key={index} className="work-item">
                            {work}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
