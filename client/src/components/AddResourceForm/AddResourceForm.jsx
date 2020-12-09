import React, { useReducer, Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserResource } from '../../redux/actions/userActions';
import { addGroupResource } from '../../redux/actions/groupPageActions';
import FormInput from '../Form-Input/Form-Input';

import {
	ButtonGroup,
	FileInput,
	TypeField,
	SelectResourceText,
	TypeButton,
	HeaderText
} from './AddResourceForm.elements';

import { ActionButton } from '../../styles';

const initialState = {
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

const AddResourceForm = ({ creatorid, GroupId, setShowModal }) => {
	const [ type, setType ] = useState('Link');
	const [ file, setFile ] = useState('');
	const [ fileName, setFileName ] = useState('');

	const [ state, dispatch ] = useReducer(reducer, initialState);
	const { title, description, link } = state;

	//redux
	const storeDispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!title || !description) {
			console.log('Please Enter All Fields');
			return;
		}

		const formData = new FormData();

		console.log(type);

		if (type === 'File') {
			console.log('A file was uploaded');
			console.log(fileName);

			for (let i = fileName.length; i >= 0; i--) {
				if (fileName[i] === '.') {
					formData.append('type', fileName.slice(i + 1));
					break;
				}
			}

			// formData.append('type', type);
		} else {
			console.log('A Link was uploaded');
			formData.append('type', type);
		}

		formData.append('title', title);
		formData.append('description', description);
		formData.append('mutable', false);
		formData.append('fileName', fileName);

		if (type === 'Link') {
			formData.append('link', link);
		} else {
			formData.append('file', file);
		}

		let newObject = {};

		console.log('Group ID:');
		console.log(GroupId);

		console.log('CreatorId:');
		console.log(creatorid);

		if (GroupId) {
			formData.append('GroupId', GroupId);
			newObject = { ...state, mutable: true, GroupId: GroupId };
		}

		if (creatorid) {
			formData.append('creatorid', creatorid);
			newObject = { ...state, mutable: true, creatorid: creatorid };
		}

		try {
			if (GroupId) {
				// storeDispatch(addGroupResource(newObject));
				storeDispatch(addGroupResource(formData));
			} else {
				// storeDispatch(addUserResource(newObject));
				storeDispatch(addUserResource(formData));
			}
			setShowModal(false);
		} catch (error) {
			console.log('An Error Occurred');
		}
	};

	const handleInput = (e) => {
		dispatch({ field: e.target.name, value: e.target.value });
	};

	const handleChange = (e) => {
		setFile(e.target.files[0]);
		setFileName(e.target.files[0].name);
	};

	return (
		<Fragment>
			<HeaderText>Add Resource</HeaderText>
			<form onSubmit={handleSubmit}>
				<SelectResourceText>Select Resource Type:</SelectResourceText>
				<ButtonGroup>
					<TypeButton type="button" onClick={() => setType('Link')}>
						Link
					</TypeButton>
					<TypeButton type="button" onClick={() => setType('File')}>
						File
					</TypeButton>
					<TypeButton type="button" onClick={() => setType('Text')}>
						Text Editor
					</TypeButton>
					{/* <button type="button" onClick={() => setType('Text')}>
						TXT
					</button>
					<button type="button" onClick={() => setType('PPTX')}>
						PPTX
					</button>
					<button type="button" onClick={() => setType('DOCX')}>
						DOCX
					</button> */}
				</ButtonGroup>
				<TypeField>
					<h3>Type: {type}</h3>
				</TypeField>

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
				{type === 'Link' ? (
					<FormInput
						type="text"
						name="link"
						label="Link URL"
						value={link}
						onChange={handleInput}
					/>
				) : (
					<FileInput>
						<input type="file" onChange={handleChange} />
					</FileInput>
				)}

				<ActionButton edit fullWidth type="submit" value="Upload">
					Create Resource
				</ActionButton>
			</form>
		</Fragment>
	);
};

export default AddResourceForm;
