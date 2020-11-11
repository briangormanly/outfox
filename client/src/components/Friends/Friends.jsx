import React, { useState, useEffect, Fragment } from 'react';

import friendService from '../../services/friends';

import { FriendContainer, UserContainer } from './Friends.elements';
import { FriendCard } from '../index';

const Friends = () => {
	const [ friends, setFriends ] = useState([]);
	const [ pendingRequest, setPendingRequest ] = useState([]);

	useEffect(() => {
		let mounted = true;
		const request = async () => {
			const response = await friendService.getAll();
			// console.log(response);

			if (mounted) {
				const requestArr = response.filter((request) => request.status === 'p');
				const friendArr = response.filter((request) => request.status === 'a');

				setPendingRequest(requestArr);
				setFriends(friendArr);
			}
		};

		request();

		return () => (mounted = false);
	}, []);

	return (
		<FriendContainer>
			<h1>Friends</h1>
			<UserContainer>
				<h3>Pending Request:</h3>
				{pendingRequest.map((request) => (
					<FriendCard key={request.friendRequestid} {...request} />
				))}
			</UserContainer>
			<UserContainer>
				<h3>Friends:</h3>
				{friends.map((friend) => (
					<FriendCard key={friend.friendRequestid} {...friend} />
				))}
			</UserContainer>
		</FriendContainer>
	);
};

export default Friends;
