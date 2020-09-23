import React from 'react';

import { HomeNavbar, Hero, Features, InfoSection } from '../../components';

import { heroObject, featureObject, infoObject } from './HomePage.data';

const LandingPage = () => {
	return (
		<div>
			<HomeNavbar />
			<Hero {...heroObject} />
			<Features {...featureObject} />
			<InfoSection {...infoObject} />
		</div>
	);
};

export default LandingPage;
