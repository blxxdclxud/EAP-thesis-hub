// src/lib/firestore.ts
import {
	collection,
	addDoc,
	DocumentReference,
	getDocs,
	doc,
	getDoc,
	updateDoc,
} from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { Student } from '@/types/student';

const addStudent = async (student: Student) => {
	try {
		const docRef: DocumentReference = await addDoc(collection(db, 'students'), student);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const editStudent = async (studentID: string, updatedData: Partial<Student>) => {
	try {
		const studentDocRef = doc(db, 'students', studentID);
		await updateDoc(studentDocRef, updatedData);
		console.log(`Document with ID ${studentID} updated successfully`);
	} catch (e) {
		console.error('Error updating document: ', e);
	}
};

const getStudents = async () => {
	const querySnapshot = await getDocs(collection(db, 'students'));
	const students: Student[] = [];
	querySnapshot.forEach((doc) => {
		students.push({ id: doc.id, ...doc.data() } as Student);
	});
	return students;
};

const getStudentById = async (id: string) => {
	const docRef = doc(db, 'students', id);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		return { id: docSnap.id, ...docSnap.data() } as Student;
	} else {
		throw new Error('No such document!');
	}
};

export { addStudent, getStudents, getStudentById };
