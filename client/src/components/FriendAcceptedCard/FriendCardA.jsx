import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';

import {
	FriendContainer,
	FriendButton,
	FriendButtonGroup
} from '../FriendCard/FriendCard.elements';

import {
	Content,
	Text,
	IconContainer
} from '../ExploreUserCard/ExploreUserCard.elements';

const FriendCardA = ({ RequestSentFrom, RequestSentTo }) => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ userName, setUserName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ id, setId ] = useState(null);

	const history = useHistory();
	const params = useParams();
	const userId = parseFloat(params.id);

	useEffect(() => {
		if (userId !== RequestSentFrom.id) {
			const { firstname, lastname, username, email, id } = RequestSentFrom;
			setFirstName(firstname);
			setLastName(lastname);
			setUserName(username);
			setEmail(email);
			setId(id);
		} else {
			const { firstname, lastname, username, email, id } = RequestSentTo;
			setFirstName(firstname);
			setLastName(lastname);
			setUserName(username);
			setEmail(email);
			setId(id);
		}
	}, []);

	const handleViewPage = () => {
		history.push(`/user/${userId}/explore/${id}`);
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
				<FriendButton delete>Remove</FriendButton>
			</FriendButtonGroup>
		</FriendContainer>
	);
};

export default FriendCardA;
