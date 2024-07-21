// src/firebaseConfig.ts
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
	apiKey: 'AIzaSyChCVRFnkvWXjSbjS-SuHFDPknli7xqmgI',
	authDomain: 'eap-thesis-hub.firebaseapp.com',
	projectId: 'eap-thesis-hub',
	storageBucket: 'eap-thesis-hub.appspot.com',
	messagingSenderId: '10188283267',
	appId: '1:10188283267:web:f7f7aad6f8c1cafe7b2ab6',
	measurementId: 'G-QSYT83CZH2',
};

const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db: Firestore = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
