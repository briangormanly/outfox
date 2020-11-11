import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import userService from '../../services/users';
import { useHistory, useLocation } from 'react-router-dom';

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

const FriendCard = ({ addresseeid, status }) => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ userName, setUserName ] = useState('');
	const [ email, setEmail ] = useState('');

	useEffect(
		() => {
			let mounted = true;
			const request = async () => {
				const response = await userService.getUser(addresseeid);

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
		[ addresseeid ]
	);

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
				<FriendButton edit>View Page</FriendButton>
				{status === 'p' ? <FriendButton add>Accept</FriendButton> : ''}
				{status === 'p' ? <FriendButton delete>Deny</FriendButton> : ''}
				{status === 'a' ? <FriendButton delete>Remove</FriendButton> : ''}
			</FriendButtonGroup>
		</FriendContainer>
	);
};

export default FriendCard;
