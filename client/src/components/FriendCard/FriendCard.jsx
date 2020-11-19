import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import userService from '../../services/users';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
	denyFriendRequest,
	acceptFriendRequest
} from '../../redux/actions/friendsActions';

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

const FriendCard = ({ requesterid, status, friendRequestid }) => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ userName, setUserName ] = useState('');
	const [ email, setEmail ] = useState('');

	const history = useHistory();
	const params = useParams();
	const userId = params.id;

	// redux dispatch
	const dispatch = useDispatch();

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
		dispatch(acceptFriendRequest(friendRequestid));
	};

	const handleDeny = () => {
		dispatch(denyFriendRequest(friendRequestid));
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
				{status === 'p' ? (
					<FriendButton onClick={handleDeny} delete>
						Deny
					</FriendButton>
				) : (
					''
				)}
			</FriendButtonGroup>
		</FriendContainer>
	);
};

export default FriendCard;
