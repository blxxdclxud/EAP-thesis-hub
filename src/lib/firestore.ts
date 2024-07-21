// src/lib/firestore.ts
import {
	collection,
	addDoc,
	DocumentReference,
	getDocs,
	doc,
	getDoc,
	updateDoc,
	query,
	where,
	QuerySnapshot,
	QueryDocumentSnapshot,
} from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { Student } from '@/types/student';

const addStudent = async (student: Student): Promise<void> => {
	try {
		const docRef: DocumentReference = await addDoc(collection(db, 'students'), student);
		console.log('Document written with ID: ', docRef.id);
	} catch (e: unknown) {
		console.error('Error adding document: ', e);
	}
};

export const editStudent = async (
	studentID: string,
	updatedData: Partial<Student>,
): Promise<void> => {
	try {
		const studentDocRef = doc(db, 'students', studentID);
		await updateDoc(studentDocRef, updatedData);
		console.log(`Document with ID ${studentID} updated successfully`);
	} catch (e: unknown) {
		console.error('Error updating document: ', e);
	}
};

const getStudents = async (): Promise<Student[]> => {
	const querySnapshot: QuerySnapshot = await getDocs(collection(db, 'students'));
	const students: Student[] = [];
	querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
		students.push({ id: doc.id, ...doc.data() } as Student);
	});
	return students;
};

const getStudentById = async (id: string): Promise<Student> => {
	const docRef = doc(db, 'students', id);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		return { id: docSnap.id, ...docSnap.data() } as Student;
	} else {
		throw new Error('No such document!');
	}
};

const getStudentByToken = async (token: string): Promise<Student> => {
	try {
		const studentsRef = collection(db, 'students');
		const q = query(studentsRef, where('token', '==', token));

		const querySnapshot: QuerySnapshot = await getDocs(q);

		if (querySnapshot.empty) {
			throw new Error('No such document!');
		}

		const docSnap: QueryDocumentSnapshot = querySnapshot.docs[0];
		return { id: docSnap.id, ...docSnap.data() } as Student;
	} catch (error: unknown) {
		console.error('Error getting student by token:', error);
		throw error;
	}
};

export { addStudent, getStudents, getStudentById, getStudentByToken };
