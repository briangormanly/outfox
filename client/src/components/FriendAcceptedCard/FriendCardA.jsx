import React, { useState, useEffect, Fragment } from 'react';
import { FaUser } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';

import shareService from '../../services/sharing';

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

const FriendCardA = ({ RequestSentFrom, RequestSentTo, share, resourceId }) => {
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

	const handleShare = async () => {
		const shareObject = {
			ResourceId : resourceId,
			Sharedby   : userId,
			UserId     : id
		};
		const response = await shareService.shareResource(shareObject);
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
					{share ? '' : <p>{`${userName}`}</p>}
					{share ? '' : <p>{`${email}`}</p>}
				</Text>
			</Content>
			<FriendButtonGroup>
				{share ? (
					<FriendButton add onClick={handleShare}>
						Share
					</FriendButton>
				) : (
					<Fragment>
						<FriendButton edit onClick={handleViewPage}>
							View Page
						</FriendButton>
						<FriendButton delete>Remove</FriendButton>
					</Fragment>
				)}
			</FriendButtonGroup>
		</FriendContainer>
	);
};

export default FriendCardA;
