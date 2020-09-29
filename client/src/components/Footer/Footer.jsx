import React from 'react';

import FooterCard from '../Footer-Card/FooterCard';

import {
	FooterSection,
	FooterContainer,
	FooterCardContainer,
	Trademark
} from './Footer.elements';

const Footer = ({ cards, trademark }) => {
	return (
		<FooterSection>
			<FooterContainer>
				<FooterCardContainer>
					{cards.map((card, indx) => <FooterCard key={indx} {...card} />)}
				</FooterCardContainer>
				<Trademark>&#169;{trademark}</Trademark>
			</FooterContainer>
		</FooterSection>
	);
};

export default Footer;
