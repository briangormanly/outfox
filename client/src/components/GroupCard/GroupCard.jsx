import React from 'react';

import { Card } from './GroupCard.elements';

const GroupCard = ({ name, description }) => {
	return (
		<Card>
			<h2>{name}</h2>
			<p>{description}</p>
			<button>View Group</button>
		</Card>
	);
};

export default GroupCard;
