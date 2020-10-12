import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { CreateGroupContainer } from './CreateGroupForm.elements';

import FormInput from '../Form-Input/Form-Input';

const CreateGroupForm = () => {
	const [ name, setName ] = useState('');
	const [ description, setDescription ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
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
					onChange={setName}
				/>
				<FormInput
					type="text"
					name="groupDescription"
					label="Description"
					value={description}
					onChange={setDescription}
				/>
				<button type="submit">Create</button>
			</form>
		</CreateGroupContainer>
	);
};

export default CreateGroupForm;
