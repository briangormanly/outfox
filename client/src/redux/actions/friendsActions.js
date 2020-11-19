import {
	FRIEND_LIST_REQUEST,
	FRIEND_LIST_SUCCESS,
	REMOVE_FRIEND,
	ACCEPT_FRIEND_REQUEST,
	// SEND_FRIEND_REQUEST,
	FRIEND_FAIL,
	GET_PENDING_FRIEND_REQUEST,
	DENY_FRIEND_REQUEST
} from '../constants/friendsConstants';

import friendService from '../../services/friends';
import userService from '../../services/users';

// id is the current user
export const getFriendsList = (id) => async (dispatch) => {
	try {
		dispatch({ type: FRIEND_LIST_REQUEST });

		const data = await friendService.getFriendList(id);

		const friendList = determineFriend(data, id);

		dispatch({ type: FRIEND_LIST_SUCCESS, payload: friendList });
	} catch (error) {
		dispatch({ type: FRIEND_FAIL });
	}
};

const determineFriend = (friendArr, id) => {
	const filteredResults = friendArr.map((friend) => {
		const { RequestSentFrom, RequestSentTo, friendRequestid } = friend;

		if (RequestSentFrom.id !== id) {
			return { ...RequestSentFrom, friendRequestid };
		} else {
			return { ...RequestSentTo, friendRequestid };
		}
	});

	return filteredResults;
};

export const getPendingFriendRequest = (id) => async (dispatch) => {
	try {
		const data = await friendService.getAll();

		const pendingRequest = determinePendingRequest(data, id);
		dispatch({ type: GET_PENDING_FRIEND_REQUEST, payload: pendingRequest });
	} catch (error) {
		dispatch({ type: FRIEND_FAIL });
	}
};

const determinePendingRequest = (requestArr, id) => {
	const filteredResults = requestArr.filter((request) => {
		const { addresseeid, status } = request;
		if (addresseeid === id && status === 'p') {
			return request;
		}
		return false;
	});

	return filteredResults;
};

export const removeFriend = (id) => async (dispatch) => {
	try {
		await friendService.removeFriend(id);
		console.log('Remove Success');
		dispatch({ type: REMOVE_FRIEND, payload: id });
	} catch (error) {
		console.log('FAILED TO DELETE FRIEND');
		dispatch({ type: FRIEND_FAIL });
	}
};

export const denyFriendRequest = (id) => async (dispatch) => {
	try {
		await friendService.removeFriend(id);
		console.log('Deny Success');
		dispatch({ type: DENY_FRIEND_REQUEST, payload: id });
	} catch (error) {
		console.log('FAILED TO DENY FRIEND');
		dispatch({ type: FRIEND_FAIL });
	}
};

export const acceptFriendRequest = (requestID) => async (dispatch) => {
	try {
		const data = await friendService.acceptFriendRequest(requestID);
		const { friendRequestid, requesterid } = data;
		const { id, username, firstname, lastname, email } = await userService.getUser(
			requesterid
		);

		const newFriendObject = {
			id,
			username,
			firstname,
			lastname,
			email,
			friendRequestid
		};
		console.log(newFriendObject);
		dispatch({ type: ACCEPT_FRIEND_REQUEST, payload: newFriendObject });
	} catch (error) {
		dispatch({ type: FRIEND_FAIL });
	}
};
