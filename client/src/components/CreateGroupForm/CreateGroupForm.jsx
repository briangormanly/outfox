import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CreateGroupContainer } from './CreateGroupForm.elements';

import FormInput from '../Form-Input/Form-Input';

import { createGroupAction } from '../../redux/actions/userActions';

const CreateGroupForm = ({ setShowModal }) => {
	const [ name, setName ] = useState('');
	const [ description, setDescription ] = useState('');

	const storeDispatch = useDispatch();
	const { user: { id } } = useSelector((state) => state.userDetail);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name || !description) {
			console.log('Please fill out all fields');
			return;
		}

		const newGroupObject = {
			groupname        : name,
			groupdescription : description,
			createdby        : id,
			datetimeadd      : new Date().toLocaleDateString()
		};

		try {
			storeDispatch(createGroupAction(newGroupObject));
		} catch (error) {
			console.log(error);
		}

		setName('');
		setDescription('');
		setShowModal(false);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	return (
		<CreateGroupContainer>
			<h1>Create A Group</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="groupName"
					label="Group Name"
					value={name}
					onChange={handleNameChange}
				/>
				<FormInput
					type="text"
					name="groupDescription"
					label="Description"
					value={description}
					onChange={handleDescriptionChange}
				/>
				<button type="submit">Create</button>
			</form>
		</CreateGroupContainer>
	);
};

export default CreateGroupForm;
