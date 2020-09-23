import React from 'react';

import {
	FeatureSection,
	FeaturesContainer,
	Header,
	SubHead,
	CardContainer
} from './Features.elements';

import FeatureCard from '../Feature-Card/FeatureCard';

const Features = ({ header, subHead, cards }) => {
	return (
		<FeatureSection>
			<FeaturesContainer>
				<Header>{header}</Header>
				<SubHead>{subHead}</SubHead>
				<CardContainer>
					{cards.map((card, idx) => <FeatureCard key={idx} {...card} />)}
				</CardContainer>
			</FeaturesContainer>
		</FeatureSection>
	);
};

export default Features;
