import {
	USER_FAIL,
	USER_REQUEST,
	USER_SUCCESS,
	USER_SET,
	USERGROUPS_FAIL,
	USERGROUPS_REQUEST,
	USERGROUPS_SUCCESS,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	AUTH_FAIL
} from '../constants/userConstants';

export const userReducer = (
	state = {
		user    : null,
		loading : false,
		error   : null
	},
	action
) => {
	switch (action.type) {
		case USER_REQUEST:
			return { ...state, loading: true };
		case USER_SUCCESS:
			return { ...state, loading: false, user: action.payload };
		case USER_FAIL:
			return { ...state, user: null, loading: false };
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

export const authReducer = (
	state = {
		loading : false,
		auth    : false,
		error   : null,
		userID  : null
	},
	action
) => {
	switch (action.type) {
		case AUTH_REQUEST:
			return { ...state, loading: true, error: null };
		case AUTH_SUCCESS:
			return { ...state, loading: false, auth: true, userID: action.payload };
		case AUTH_FAIL:
			return {
				...state,
				loading: false,
				auth: false,
				userID: null,
				error: 'Invalid Username or Password'
			};
		default:
			return state;
	}
};
