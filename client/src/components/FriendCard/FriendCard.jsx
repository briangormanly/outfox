import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import userService from '../../services/users';
import friendService from '../../services/friends';
import { useHistory, useParams } from 'react-router-dom';

import {
	FriendContainer,
	FriendButton,
	FriendButtonGroup
} from './FriendCard.elements';

import {
	Content,
	Text,
	IconContainer
} from '../ExploreUserCard/ExploreUserCard.elements';

const FriendCard = ({ requesterid, status, friendRequestid, setUpdate, update }) => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ userName, setUserName ] = useState('');
	const [ email, setEmail ] = useState('');

	const history = useHistory();
	const params = useParams();
	const userId = params.id;

	useEffect(
		() => {
			let mounted = true;
			const request = async () => {
				const response = await userService.getUser(requesterid);

				if (mounted) {
					const { firstname, lastname, username, email } = response;
					setFirstName(firstname);
					setLastName(lastname);
					setUserName(username);
					setEmail(email);
				}
			};

			request();

			return () => (mounted = false);
		},
		[ requesterid ]
	);

	const handleViewPage = () => {
		history.push(`/user/${userId}/explore/${requesterid}`);
	};

	const handleAccept = async () => {
		const response = await friendService.acceptFriendRequest(friendRequestid);
		setUpdate(update + 1);
		console.log(response);
	};

	return (
		<FriendContainer>
			<Content>
				<IconContainer>
					<FaUser />
				</IconContainer>
				<Text>
					<h2>{`${firstName} ${lastName}`}</h2>
					<p>{`${userName}`}</p>
					<p>{`${email}`}</p>
				</Text>
			</Content>
			<FriendButtonGroup>
				<FriendButton edit onClick={handleViewPage}>
					View Page
				</FriendButton>
				{status === 'p' ? (
					<FriendButton add onClick={handleAccept}>
						Accept
					</FriendButton>
				) : (
					''
				)}
				{status === 'p' ? <FriendButton delete>Deny</FriendButton> : ''}
				{status === 'a' ? <FriendButton delete>Remove</FriendButton> : ''}
			</FriendButtonGroup>
		</FriendContainer>
	);
};

export default FriendCard;
