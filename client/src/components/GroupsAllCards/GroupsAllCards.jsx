import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import groupService from '../../services/groups.js';

import {
	deleteSharedGroup,
	createGroupAction
} from '../../redux/actions/userActions';

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

	const { user } = useSelector((state) => state.userDetail);

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

	const handleAddToMyGroups = async () => {
		const response = await groupService.getGroupData(id);
		// console.log(response);

		const { Resources, groupdescription, groupname } = response;

		const newObject = {
			Resources,
			groupdescription,
			groupname,
			createdby        : user.id,
			datetimeadd      : new Date().toLocaleDateString()
		};
		console.log(newObject);

		dispatch(createGroupAction(newObject, Resources));
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
				{shared && <button onClick={handleAddToMyGroups}>Add to My Groups</button>}
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
