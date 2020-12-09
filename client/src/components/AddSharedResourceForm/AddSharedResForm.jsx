import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addGroupResource } from '../../redux/actions/groupPageActions';
import { addUserResource } from '../../redux/actions/userActions';

import {
	AddToContainer,
	ButtonContainer,
	CheckBoxGroup,
	OptionHeaderText
} from './AddSharedResForm.elements';
import { ActionButton } from '../../styles';

const AddSharedResForm = ({ setShowModal, resourceAttributes }) => {
	const [ option, setOption ] = useState('myResources');
	const [ groupArr, setGroupArr ] = useState([]);

	const { user } = useSelector((state) => state.userDetail);
	console.log(user);
	const dispatch = useDispatch();

	console.log(resourceAttributes);

	const handleSubmit = (e) => {
		e.preventDefault();

		const { description, fileName, link, title, type, uri } = resourceAttributes;

		if (option === 'myResources') {
			const formData = new FormData();

			formData.append('link', link);
			formData.append('type', type);
			formData.append('title', title);
			formData.append('description', description);
			formData.append('mutable', false);
			formData.append('fileName', fileName);
			formData.append('creatorid', user.id);
			formData.append('uri', uri);

			try {
				dispatch(addUserResource(formData));
			} catch (error) {
				console.log(error);
			}
		}
	};

	const handleChange = (e) => {
		if (e.target.checked) {
			const arr = [ ...groupArr, e.target.value ];
			setGroupArr(arr);
		} else {
			const arr = groupArr.filter((value) => value !== e.target.value);
			setGroupArr(arr);
		}
	};

	return (
		<AddToContainer>
			<ButtonContainer>
				<button onClick={() => setOption('myResources')}>My Resources</button>
				<button onClick={() => setOption('myGroups')}>My Groups</button>
			</ButtonContainer>
			<form onSubmit={handleSubmit}>
				{option === 'myResources' && (
					<Fragment>
						<OptionHeaderText>Add To My Resources?</OptionHeaderText>
					</Fragment>
				)}

				{option === 'myGroups' && (
					<Fragment>
						<OptionHeaderText>Choose Which Groups to Add to:</OptionHeaderText>
						{user.Groups.map((group) => (
							<InputGroup key={group.id} {...group} handleChange={handleChange} />
						))}
					</Fragment>
				)}

				<ActionButton edit fullWidth type="submit">
					Add
				</ActionButton>
			</form>
		</AddToContainer>
	);
};

const InputGroup = ({ id, groupname, handleChange }) => {
	return (
		<CheckBoxGroup>
			<label>{`${groupname}`}</label>
			<input type="checkbox" value={id} onChange={handleChange} />
		</CheckBoxGroup>
	);
};

export default AddSharedResForm;
