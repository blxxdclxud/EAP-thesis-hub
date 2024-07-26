import React from 'react';
import Header from '@/components/Header/Header';
import Researches from '@/components/Researches/Researches';

export const metadata = {
	title: 'Research',
	description: 'This is research page. Enter your research.',
};

const ResearchesPage = (): React.JSX.Element | null => {
	return (
		<div>
			<Header />
			<Researches />
		</div>
	);
};

export default ResearchesPage;
