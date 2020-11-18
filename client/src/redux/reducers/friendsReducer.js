import {
	FRIEND_LIST_REQUEST,
	FRIEND_LIST_SUCCESS,
	ADD_FRIEND,
	REMOVE_FRIEND,
	ACCEPT_FRIEND_REQUEST,
	SEND_FRIEND_REQUEST,
	FRIEND_FAIL,
	GET_PENDING_FRIEND_REQUEST
} from '../constants/friendsConstants';

export const friendsReducer = (
	state = {
		friendList           : [],
		pendingFriendRequest : [],
		loading              : false,
		error                : null
	},
	action
) => {
	switch (action.type) {
		case FRIEND_LIST_REQUEST:
			return { ...state, loading: true };
		case FRIEND_LIST_SUCCESS:
			return { ...state, loading: false, friendList: [ ...action.payload ] };
		case GET_PENDING_FRIEND_REQUEST:
			return { ...state, pendingFriendRequest: [ ...action.payload ] };
		case ACCEPT_FRIEND_REQUEST:
			return { ...state };
		case SEND_FRIEND_REQUEST:
			return { ...state };
		case REMOVE_FRIEND:
			return { ...state };
		default:
			return state;
	}
};
