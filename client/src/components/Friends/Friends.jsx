import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
	getFriendsList,
	getPendingFriendRequest
} from '../../redux/actions/friendsActions';

import { FriendContainer, UserContainer } from './Friends.elements';
import { FriendCard, FriendCardAccepted } from '../index';

const Friends = () => {
	const params = useParams();
	const userId = parseFloat(params.id);

	// redux
	const dispatch = useDispatch();
	const { friendList, pendingFriendRequest } = useSelector(
		(state) => state.friendDetail
	);

	useEffect(
		() => {
			let mounted = true;
			const request = async () => {
				if (mounted) {
					// Redux Dispatch
					dispatch(getFriendsList(userId));
					dispatch(getPendingFriendRequest(userId));
				}
			};

			request();

			return () => (mounted = false);
		},
		[ dispatch, userId ]
	);

	return (
		<FriendContainer>
			<h1>Friends</h1>
			<UserContainer>
				<h3>Pending Request:</h3>
				{pendingFriendRequest.map((request) => (
					<FriendCard key={request.friendRequestid} {...request} />
				))}
			</UserContainer>
			<UserContainer>
				<h3>Friends:</h3>
				{friendList.map((friend) => (
					<FriendCardAccepted key={friend.friendRequestid} {...friend} />
				))}
			</UserContainer>
		</FriendContainer>
	);
};

export default Friends;
