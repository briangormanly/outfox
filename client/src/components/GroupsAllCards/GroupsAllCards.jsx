import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { GroupCard } from './GroupsAllCards.elements';

const GroupsAllCards = ({
	id,
	datetimeadd,
	groupdescription,
	groupname,
	shared,
	sharedFrom
}) => {
	const date = datetimeadd.slice(0, 10);
	const history = useHistory();
	// const params = useParams();
	const location = useLocation();
	const params = useParams();
	console.log(params);

	console.log(sharedFrom);

	const handleClick = () => {
		history.push(`${location.pathname}/${id}`);
	};

	const viewSharedGroup = () => {
		history.push(`/user/${params.id}/explore/${sharedFrom.id}/${id}`);
	};
	return (
		<GroupCard>
			{sharedFrom && (
				<div>Shared By: {`${sharedFrom.firstname} ${sharedFrom.lastname}`}</div>
			)}
			<div>Created: {date}</div>
			<h2>{groupname}</h2>
			<p>{groupdescription}</p>
			{shared ? <button>Add to...</button> : ''}
			{shared ? (
				<button onClick={viewSharedGroup}>View Group</button>
			) : (
				<button onClick={handleClick}>View Group</button>
			)}
		</GroupCard>
	);
};

export default GroupsAllCards;
