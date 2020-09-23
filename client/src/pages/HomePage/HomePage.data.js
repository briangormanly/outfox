import React from 'react';

import { FaBolt, FaThumbsUp, FaLightbulb, FaHandHoldingUsd } from 'react-icons/fa';

export const heroObject = {
	img         : require('../../assets/online_connection.svg'),
	src         : 'Hero image',
	header      : 'Everything your LMS should be and more.',
	description :
		'Manage, track, and achieve your learning goals with Outfox LMS. Group and share resources with friends. No cost, no expiration, a free lifetime of learning.',
	buttonLabel : 'Get Started'
};

export const featureObject = {
	header  : 'Choose Outfox',
	subHead : 'A better learning management system',
	cards   : [
		{
			icon        : <FaBolt />,
			header      : 'Features',
			description :
				'Outfox is an enterprise LMS. Power up your learning with the features and integrations you need.'
		},
		{
			icon        : <FaThumbsUp />,
			header      : 'Customer Support',
			description :
				"We're known for our customer support. Quick responses, 24/7. We care about solving your training challenges."
		},
		{
			icon        : <FaLightbulb />,
			header      : 'Ease of use',
			description :
				'Outfox LMS has been built with the user in mind. We obsess over making workflows as easy as they are powerful.'
		},
		{
			icon        : <FaHandHoldingUsd />,
			header      : 'Pricing',
			description :
				'Outfox is 100% open source. No need to take out your wallet. We got you covered.'
		}
	]
};
