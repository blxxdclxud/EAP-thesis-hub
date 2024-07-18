// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyChCVRFnkvWXjSbjS-SuHFDPknli7xqmgI',
	authDomain: 'eap-thesis-hub.firebaseapp.com',
	projectId: 'eap-thesis-hub',
	storageBucket: 'eap-thesis-hub.appspot.com',
	messagingSenderId: '10188283267',
	appId: '1:10188283267:web:f7f7aad6f8c1cafe7b2ab6',
	measurementId: 'G-QSYT83CZH2',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
