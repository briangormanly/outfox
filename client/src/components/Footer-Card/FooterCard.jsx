import React from 'react';

import { Card, FooterLink, Header } from './FooterCard.elements';

const FooterCard = ({ header, links }) => {
	return (
		<Card>
			<Header>{header}</Header>
			{links.map(({ label, ref }, idx) => (
				<FooterLink key={idx} to={ref}>
					{label}
				</FooterLink>
			))}
		</Card>
	);
};

export default FooterCard;
