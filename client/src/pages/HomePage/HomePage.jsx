import React from 'react';

import { HomeNavbar, Hero, Features } from '../../components';

import { heroObject, featureObject } from './HomePage.data';

const LandingPage = () => {
	return (
		<div>
			<HomeNavbar />
			<Hero {...heroObject} />
			<Features {...featureObject} />
		</div>
	);
};

export default LandingPage;
