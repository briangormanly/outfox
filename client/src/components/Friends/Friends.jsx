import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import friendService from '../../services/friends';

import { FriendContainer, UserContainer } from './Friends.elements';
import { FriendCard, FriendCardAccepted } from '../index';

const Friends = () => {
	const [ friends, setFriends ] = useState([]);
	const [ pendingRequest, setPendingRequest ] = useState([]);
	const [ update, setUpdate ] = useState(0);

	const params = useParams();
	const userId = parseFloat(params.id);

	useEffect(
		() => {
			let mounted = true;
			const request = async () => {
				const response = await friendService.getAll();
				const response2 = await friendService.getFriendList(userId);

				if (mounted) {
					const reqArr = response.filter(
						(request) => request.addresseeid === userId
					);
					const requestArr = reqArr.filter((request) => request.status === 'p');

					setPendingRequest(requestArr);
					setFriends(response2);
				}
			};

			request();

			return () => (mounted = false);
		},
		[ update ]
	);

	return (
		<FriendContainer>
			<h1>Friends</h1>
			<UserContainer>
				<h3>Pending Request:</h3>
				{pendingRequest.map((request) => (
					<FriendCard
						key={request.friendRequestid}
						{...request}
						update={update}
						setUpdate={setUpdate}
					/>
				))}
			</UserContainer>
			<UserContainer>
				<h3>Friends:</h3>
				{friends.map((friend) => (
					<FriendCardAccepted key={friend.friendRequestid} {...friend} />
				))}
			</UserContainer>
		</FriendContainer>
	);
};

export default Friends;
