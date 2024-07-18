// src/hooks/useAuth.tsx
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useRouter } from 'next/router';

const useAuth = () => {
	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
				router.push('/');
			}
		});

		return () => unsubscribe();
	}, [router]);

	return user;
};

export default useAuth;
