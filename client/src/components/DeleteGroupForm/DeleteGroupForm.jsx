import React from 'react';
import { useHistory } from 'react-router-dom';

import { ActionButton } from '../../styles';
import groupService from '../../services/groups';

const DeleteGroupForm = ({ GroupId, userID }) => {
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await groupService.deleteGroup(GroupId);
			history.push(`/user/${userID}`);
		} catch (error) {
			console.log('An Error Occurred');
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
