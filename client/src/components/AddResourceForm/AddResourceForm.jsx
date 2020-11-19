import React, { useReducer, Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserResource } from '../../redux/actions/userActions';
import { addGroupResource } from '../../redux/actions/groupPageActions';
import FormInput from '../Form-Input/Form-Input';

import { ButtonGroup, FileInput, TypeField } from './AddResourceForm.elements';

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

	const [ state, dispatch ] = useReducer(reducer, initialState);
	const { title, description, link } = state;

	//redux
	const storeDispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Submitted');

		if (!title || !description) {
			console.log('Please Enter All Fields');
			return;
		}

		const formData = new FormData();
		formData.append('type', type);
		formData.append('title', title);
		formData.append('description', description);
		formData.append('mutable', false);

		if (type === 'Link') {
			formData.append('link', link);
		} else {
			formData.append('file', file);
		}

		let newObject = {};

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
	};

	return (
		<Fragment>
			<h1>Add Resource</h1>
			<form onSubmit={handleSubmit}>
				<h2>Select Resource Type:</h2>
				<ButtonGroup>
					<button type="button" onClick={() => setType('Link')}>
						Link
					</button>
					<button type="button" onClick={() => setType('PDF')}>
						PDF
					</button>
					<button type="button" onClick={() => setType('Image')}>
						Image
					</button>
					<button type="button" onClick={() => setType('Text')}>
						TXT
					</button>
					<button type="button" onClick={() => setType('PPTX')}>
						PPTX
					</button>
					<button type="button" onClick={() => setType('DOCX')}>
						DOCX
					</button>
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
