import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { deleteUserResource } from '../../redux/actions/userActions';
import { deleteGroupResource } from '../../redux/actions/groupPageActions';

import { ActionButton } from '../../styles';

const DeleteResourceForm = ({ setShowModal, resourceID }) => {
	const dispatch = useDispatch();

	const params = useParams();
	console.log(params);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			if (params.groupID) {
				dispatch(deleteGroupResource(resourceID));
			} else {
				dispatch(deleteUserResource(resourceID));
			}
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
