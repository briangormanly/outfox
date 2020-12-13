import React from 'react';

import { HomeNavbar, Footer } from '../../components';

import {
	footerObject
} from '../HomePage/HomePage.data';

const Documentation = () => {
	return (
		<div>
			<HomeNavbar />

			<Footer {...footerObject} />
		</div>
	);
};

export default Documentation;
