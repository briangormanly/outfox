import React from 'react';

import { Card, IconWrapper, Header, Description } from './FeatureCard.element';

const FeatureCard = ({ icon, header, description }) => (
	<Card>
		<IconWrapper>{icon}</IconWrapper>
		<Header>{header}</Header>
		<Description>{description}</Description>
	</Card>
);

export default FeatureCard;
