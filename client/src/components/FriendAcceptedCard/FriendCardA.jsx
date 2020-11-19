import React, { Fragment } from 'react';
import { FaUser } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';

import shareService from '../../services/sharing';

import { useDispatch } from 'react-redux';
import { removeFriend } from '../../redux/actions/friendsActions';

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

const FriendCardA = ({
	share,
	resourceId,
	id,
	username,
	firstname,
	lastname,
	email,
	friendRequestid
}) => {
	const history = useHistory();
	const params = useParams();
	const userId = parseFloat(params.id);

	const dispatch = useDispatch();

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

	const handleRemove = async () => {
		console.log(friendRequestid);
		dispatch(removeFriend(friendRequestid));
	};

	return (
		<FriendContainer>
			<Content>
				<IconContainer>
					<FaUser />
				</IconContainer>
				<Text>
					<h2>{`${firstname} ${lastname}`}</h2>
					{share ? '' : <p>{`${username}`}</p>}
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
						<FriendButton onClick={handleRemove} delete>
							Remove
						</FriendButton>
					</Fragment>
				)}
			</FriendButtonGroup>
		</FriendContainer>
	);
};

export default FriendCardA;
