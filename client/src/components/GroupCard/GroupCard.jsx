import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Card } from './GroupCard.elements';

const GroupCard = ({ name, description, id }) => {
	const history = useHistory();
	const location = useLocation();
	const handleClick = () => {
		console.log(location.pathname);
		history.push(`${location.pathname}/groups/${id}`);
	};
	return (
		<Card>
			<h2>{name}</h2>
			<p>{description}</p>
			<button onClick={handleClick}>View Group</button>
		</Card>
	);
};

export default GroupCard;
