import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteGroup } from '../../redux/actions/groupPageActions';

import { ActionButton } from '../../styles';
import groupService from '../../services/groups';

const DeleteGroupForm = ({ GroupId, userID }) => {
	const history = useHistory();

	//redux
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// await groupService.deleteGroup(GroupId);
			dispatch(deleteGroup(parseFloat(GroupId)));
			history.push(`/user/${userID}`);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Delete Group?</h1>
			<ActionButton delete fullWidth type="submit">
				Delete Group
			</ActionButton>
		</form>
	);
};

export default DeleteGroupForm;
