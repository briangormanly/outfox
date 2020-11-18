import {
	USER_FAIL,
	USER_REQUEST,
	USER_SUCCESS,
	USER_ADD_GROUP,
	USER_LOGOUT,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	AUTH_FAIL,
	AUTH_LOGOUT,
	USER_ADD_RESOURCE,
	USER_EDIT_RESOURCE,
	USER_DELETE_RESOURCE
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
		case USER_ADD_GROUP:
			return {
				...state,
				user : { ...state.user, Groups: [ ...state.user.Groups, action.payload ] }
			};
		case USER_EDIT_RESOURCE: {
			const newResourceList = state.user.Resources.map((resource) => {
				if (resource.id === action.payload.id) {
					return action.payload;
				} else {
					return resource;
				}
			});

			return {
				...state,
				user : { ...state.user, Resources: [ ...newResourceList ] }
			};
		}
		case USER_DELETE_RESOURCE: {
			const filteredResourcs = state.user.Resources.filter(
				(resource) => resource.id !== action.payload
			);
			return {
				...state,
				user : { ...state.user, Resources: [ ...filteredResourcs ] }
			};
		}
		case USER_ADD_RESOURCE:
			return { ...state };
		case USER_LOGOUT:
			return {
				...state,
				user    : {
					firstname : '',
					lastname  : '',
					Groups    : [],
					Resources : []
				},
				loading : false,
				error   : null
			};
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
		case AUTH_LOGOUT:
			return {
				...state,
				loading : false,
				auth    : false,
				error   : false,
				userID  : null
			};
		default:
			return state;
	}
};
