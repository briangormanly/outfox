import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { GroupCard } from './GroupsAllCards.elements';

const GroupsAllCards = ({ id, datetimeadd, groupdescription, groupname }) => {
	const date = datetimeadd.slice(0, 10);
	const history = useHistory();
	const params = useParams();

	const handleClick = () => {
		history.push(`/user/${params.id}/groups/${id}`);
	};
	return (
		<GroupCard>
			<div>Created: {date}</div>
			<h2>{groupname}</h2>
			<p>{groupdescription}</p>
			<button onClick={handleClick}>View Group</button>
		</GroupCard>
	);
};

export default GroupsAllCards;
