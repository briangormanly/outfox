import React from 'react';

import { HomeNavbar, Hero, Features, InfoSection, Footer } from '../../components';

import {
	heroObject,
	featureObject,
	infoObject,
	footerObject
} from './HomePage.data';

const LandingPage = () => {
	return (
		<div>
			<HomeNavbar />
			<Hero {...heroObject} />
			<Features {...featureObject} />
			<InfoSection {...infoObject} />
			<Footer {...footerObject} />
		</div>
	);
};

export default LandingPage;
