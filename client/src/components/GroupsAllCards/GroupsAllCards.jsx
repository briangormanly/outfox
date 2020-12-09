import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { deleteSharedGroup } from '../../redux/actions/userActions';

import { GroupCard, ButtonGroup } from './GroupsAllCards.elements';

const GroupsAllCards = ({
	id,
	datetimeadd,
	groupdescription,
	groupname,
	shared,
	sharedFrom,
	sharedGroupID
}) => {
	const date = datetimeadd.slice(0, 10);
	const history = useHistory();
	// const params = useParams();
	const location = useLocation();
	const params = useParams();

	//redux
	const dispatch = useDispatch();

	const handleClick = () => {
		history.push(`${location.pathname}/${id}`);
	};

	const viewSharedGroup = () => {
		history.push(`/user/${params.id}/explore/${sharedFrom.id}/${id}`);
	};

	const handleRemoveSharedGroup = () => {
		try {
			dispatch(deleteSharedGroup(sharedGroupID));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<GroupCard>
			{sharedFrom && (
				<div>Shared By: {`${sharedFrom.firstname} ${sharedFrom.lastname}`}</div>
			)}
			<div>Created: {date}</div>
			<h2>{groupname}</h2>
			<p>{groupdescription}</p>
			<ButtonGroup>
				{shared && <button>Add to My Groups</button>}
				{shared && <button onClick={handleRemoveSharedGroup}>Remove</button>}
				{shared ? (
					<button onClick={viewSharedGroup}>View Group</button>
				) : (
					<button onClick={handleClick}>View Group</button>
				)}
			</ButtonGroup>
		</GroupCard>
	);
};

export default GroupsAllCards;
