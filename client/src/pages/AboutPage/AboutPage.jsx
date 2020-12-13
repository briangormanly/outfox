import React from 'react';

import { HomeNavbar, Footer } from '../../components';
import { About } from '../../components/About/About';

import {
	footerObject
} from '../HomePage/HomePage.data';

const AboutPage = () => {
	return (
		<div>
			<HomeNavbar />
			<About />
			<Footer {...footerObject} />
		</div>
	);
};

export default AboutPage;
