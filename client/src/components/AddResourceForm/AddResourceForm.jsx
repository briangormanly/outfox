import React, { useReducer, Fragment } from 'react';
import FormInput from '../Form-Input/Form-Input';

import { ActionButton } from '../../styles';

import groupService from '../../services/groups';

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

const AddResourceForm = ({
	creatorid,
	GroupId,
	setShowModal,
	setUpdateFlag,
	updateFlag
}) => {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const { type, title, description, link } = state;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!type || !title || !description || !link) {
			console.log('Please Enter All Fields');
			return;
		}

		let newObject = {};

		if (GroupId) {
			newObject = { ...state, mutable: true, GroupId: GroupId };
		}

		if (creatorid) {
			newObject = { ...state, mutable: true, creatorid: creatorid };
		}

		try {
			await groupService.createResource(newObject);

			if (updateFlag) {
				setUpdateFlag(updateFlag + 1);
			}
			setShowModal(false);
		} catch (error) {
			console.log('An Error Occurred');
		}
	};

	const handleInput = (e) => {
		dispatch({ field: e.target.name, value: e.target.value });
	};

	return (
		<Fragment>
			<h1>Add Resource</h1>
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
					Create Resource
				</ActionButton>
			</form>
		</Fragment>
	);
};

export default AddResourceForm;
