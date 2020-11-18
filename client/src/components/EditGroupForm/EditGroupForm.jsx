import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editGroup } from '../../redux/actions/groupPageActions';
import FormInput from '../Form-Input/Form-Input';

import { ActionButton } from '../../styles';

import groupService from '../../services/groups';

const EditGroupForm = ({ GroupId, setUpdateFlag, updateFlag, setShowModal }) => {
	const [ name, setName ] = useState('');
	const [ description, setDescription ] = useState('');

	//redux
	const dispatch = useDispatch();

	useEffect(
		() => {
			const fetchData = async () => {
				const response = await groupService.getGroupData(GroupId);
				const { groupname, groupdescription } = response;
				setName(groupname);
				setDescription(groupdescription);
			};

			fetchData();
		},
		[ GroupId ]
	);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name || !description) {
			console.log('Please fill out all fields');
			return;
		}

		const newGroupObject = {
			groupname        : name,
			groupdescription : description
		};

		try {
			dispatch(editGroup(GroupId, newGroupObject));
			setShowModal(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Edit Group</h1>
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
			<ActionButton edit fullWidth type="submit">
				Update Group
			</ActionButton>
		</form>
	);
};

export default EditGroupForm;
