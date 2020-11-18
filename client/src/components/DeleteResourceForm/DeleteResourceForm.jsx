import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteUserResource } from '../../redux/actions/userActions';

import { ActionButton } from '../../styles';

const DeleteResourceForm = ({ setShowModal, resourceID }) => {
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			dispatch(deleteUserResource(resourceID));
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
