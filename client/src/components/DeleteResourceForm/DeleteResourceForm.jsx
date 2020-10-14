import React from 'react';

import { ActionButton } from '../../styles';
import groupService from '../../services/groups';

const DeleteResourceForm = ({
	setShowModal,
	resourceID,
	setUpdateFlag,
	updateFlag
}) => {
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await groupService.deleteResource(resourceID);
			setUpdateFlag(updateFlag + 1);
			setShowModal(false);
		} catch (error) {
			console.log('An Error Occurred');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Delete Resource?</h1>
			<ActionButton delete fullWidth type="submit">
				Delete Resource
			</ActionButton>
		</form>
	);
};

export default DeleteResourceForm;
