import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import friendService from '../../services/friends';

import FormInput from '../Form-Input/Form-Input';
import { ActionButton } from '../../styles';

import { FriendCardAccepted } from '../index';

const ShareResourceForm = ({
	resourceID,
	setShowModal,
	setUpdateFlag,
	updateFlag
}) => {
	const [ value, setValue ] = useState('');

	const [ friends, setFriends ] = useState([]);

	const params = useParams();
	const userId = parseFloat(params.id);
	const userID = parseFloat(params.userID);

	useEffect(() => {
		let mounted = true;

		const request = async () => {
			const response = await friendService.getFriendList(userId || userID);
			if (mounted) {
				setFriends(response);
			}
		};

		request();

		return () => (mounted = false);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// try {
		// 	//

		// 	if (updateFlag) {
		// 		setUpdateFlag(updateFlag + 1);
		// 	}
		// 	setShowModal(false);
		// } catch (error) {
		// 	console.log('An Error Occurred');
		// }
	};

	return (
		<Fragment>
			<h1>Choose a friend to share with:</h1>
			<form onSubmit={handleSubmit}>
				{friends &&
					friends.map((friend) => {
						if (userId !== friend.RequestSentFrom.id) {
							return (
								<FriendCardAccepted
									key={friend.friendRequestid}
									{...friend}
									resourceId={resourceID}
									share
								/>
							);
						} else {
							return (
								<FriendCardAccepted
									key={friend.friendRequestid}
									{...friend}
									share
									resourceId={resourceID}
								/>
							);
						}
					})}
			</form>
		</Fragment>
	);
};

export default ShareResourceForm;
