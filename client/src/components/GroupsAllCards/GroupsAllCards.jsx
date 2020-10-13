import React from 'react';

import { GroupCard } from './GroupsAllCards.elements';

const GroupsAllCards = ({ id, datetimeadd, groupdescription, groupname }) => {
	const date = datetimeadd.slice(0, 10);
	console.log(id);
	return (
		<GroupCard>
			<div>Created: {date}</div>
			<h2>{groupname}</h2>
			<p>{groupdescription}</p>
			<button>View Group</button>
		</GroupCard>
	);
};

export default GroupsAllCards;
