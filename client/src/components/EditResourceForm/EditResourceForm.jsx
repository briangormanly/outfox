import React, { useReducer, Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../Form-Input/Form-Input';

import { ActionButton } from '../../styles';

import groupService from '../../services/groups';
import { editUserResource } from '../../redux/actions/userActions';

const initialState = {
	type        : '',
	title       : '',
	description : '',
	link        : ''
};

function reducer(state, { field, value }) {
	return {
		...state,
		[field] : value
	};
}

const EditResourceForm = ({ resourceID, setShowModal }) => {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const { type, title, description, link } = state;

	// redux
	const storeDispatch = useDispatch();

	useEffect(
		() => {
			const fetchData = async () => {
				const response = await groupService.getResourceData(resourceID);
				const { type, title, description, link } = response;
				dispatch({ field: 'type', value: type });
				dispatch({ field: 'title', value: title });
				dispatch({ field: 'description', value: description });
				dispatch({ field: 'link', value: link });
			};

			fetchData();
		},
		[ resourceID ]
	);

	const handleInput = (e) => {
		dispatch({ field: e.target.name, value: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!type || !title || !description || !link) {
			console.log('Please Enter All Fields');
			return;
		}

		const newObject = { ...state };

		try {
			storeDispatch(editUserResource(resourceID, newObject));
			setShowModal(false);
		} catch (error) {
			console.log('An Error Occurred');
		}
	};

	return (
		<Fragment>
			<h1>Edit Resource</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="type"
					label="Type"
					value={type}
					onChange={handleInput}
				/>
				<FormInput
					type="text"
					name="title"
					label="Title"
					value={title}
					onChange={handleInput}
				/>
				<FormInput
					type="text"
					name="description"
					label="Description"
					value={description}
					onChange={handleInput}
				/>
				<FormInput
					type="text"
					name="link"
					label="Link URL"
					value={link}
					onChange={handleInput}
				/>
				<ActionButton edit fullWidth type="submit">
					Update Resource
				</ActionButton>
			</form>
		</Fragment>
	);
};

export default EditResourceForm;
