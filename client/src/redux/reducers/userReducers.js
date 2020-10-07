import {
	USER_FAIL,
	USER_REQUEST,
	USER_SUCCESS,
	USER_SET,
	// USER_AUTH,
	USERGROUPS_FAIL,
	USERGROUPS_REQUEST,
	USERGROUPS_SUCCESS
} from '../constants/userConstants';

export const userReducer = (state = {}, action) => {
	switch (action.type) {
		// case USER_AUTH:
		// 	return { ...state, user: action.payload, auth: true };
		case USER_SET:
			return { ...state, user: action.payload, auth: true };
		case USER_REQUEST:
			return { ...state, loading: true };
		case USER_SUCCESS:
			return { ...state, loading: false, user: action.payload };
		case USER_FAIL:
			return { ...state, user: {}, loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userWithGroupsReducer = (state = {}, action) => {
	switch (action.type) {
		case USERGROUPS_REQUEST:
			return { ...state, loading: true };
		case USERGROUPS_SUCCESS:
			return { ...state, loading: false, userWithGroups: action.payload };
		case USERGROUPS_FAIL:
			return { ...state, userWithGroups: {}, loading: false, error: action.payload };
		default:
			return state;
	}
};
