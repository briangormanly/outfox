import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Card } from './GroupCard.elements';

const GroupCard = ({ name, description, id }) => {
	const history = useHistory();
	const params = useParams();

	const handleClick = () => {
		history.push(`/user/${params.id}/groups/${id}`);
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
