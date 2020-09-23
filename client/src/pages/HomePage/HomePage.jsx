import React from 'react';

import { HomeNavbar, Hero } from '../../components';

import { heroObject } from './HomePage.data';

const LandingPage = () => {
	return (
		<div>
			<HomeNavbar />
			<Hero {...heroObject} />
		</div>
	);
};

export default LandingPage;
