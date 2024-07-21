import { Work } from '@/types/work';

export interface Student {
	id?: string;
	token?: string;
	name: string;
	email: string;
	number: string;
	about: string;
	works: Work[];
}
