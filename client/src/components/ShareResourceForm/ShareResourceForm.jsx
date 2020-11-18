import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import shareService from '../../services/sharing';

import { CheckBoxGroup } from './ShareResourceForm.elements';
import { ActionButton } from '../../styles';

const ShareResourceForm = ({ resourceID, setShowModal, GroupID }) => {
	const [ shareArr, setShareArr ] = useState([]);

	const { friendList } = useSelector((state) => state.friendDetail);
	const { user } = useSelector((state) => state.userDetail);

	const groupID = parseFloat(GroupID);

	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			if (shareArr.length > 0) {
				shareArr.map((friend) => {
					const sendResource = async () => {
						await shareService.shareResource({
							ResourceId : resourceID,
							Sharedby   : user.id,
							UserId     : friend
						});
					};

					const sendGroup = async () => {
						await shareService.shareGroup({
							GroupId  : groupID,
							Sharedby : user.id,
							UserId   : friend
						});
					};

					if (groupID) {
						sendGroup();
					} else {
						sendResource();
					}
				});
			} else {
				return;
			}
		} catch (error) {
			console.log(error);
		}

		setShowModal(false);
	};

	const handleChange = (e) => {
		if (e.target.checked) {
			const arr = [ ...shareArr, e.target.value ];
			setShareArr(arr);
		} else {
			const arr = shareArr.filter((value) => value !== e.target.value);
			setShareArr(arr);
		}
	};

	return (
		<Fragment>
			<h1>Choose friends to share with:</h1>
			<form onSubmit={handleSubmit}>
				{friendList.map((friend) => (
					<InputGroup
						key={friend.friendRequestid}
						{...friend}
						handleChange={handleChange}
					/>
				))}
				<ActionButton add fullWidth>
					Share
				</ActionButton>
			</form>
		</Fragment>
	);
};

const InputGroup = ({ firstname, lastname, id, handleChange }) => {
	return (
		<CheckBoxGroup>
			<label>{`${firstname} ${lastname}`}</label>
			<input type="checkbox" value={id} onChange={handleChange} />
		</CheckBoxGroup>
	);
};

export default ShareResourceForm;
