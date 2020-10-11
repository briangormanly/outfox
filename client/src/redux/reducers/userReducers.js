import {
	USER_FAIL,
	USER_REQUEST,
	USER_SUCCESS,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	AUTH_FAIL
} from '../constants/userConstants';

export const userReducer = (
	state = {
		user    : {
			firstname : '',
			lastname  : '',
			Groups    : [],
			Resources : []
		},
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

export const authReducer = (
	state = {
		loading : false,
		auth    : false,
		error   : false,
		userID  : null
	},
	action
) => {
	switch (action.type) {
		case AUTH_REQUEST:
			return { ...state, loading: true, error: false };
		case AUTH_SUCCESS:
			return { ...state, loading: false, auth: true, userID: action.payload };
		case AUTH_FAIL:
			return {
				...state,
				loading : false,
				auth    : false,
				userID  : null,
				error   : true
			};
		default:
			return state;
	}
};
