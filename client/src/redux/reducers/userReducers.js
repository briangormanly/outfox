import {
	USER_FAIL,
	USER_REQUEST,
	USER_SUCCESS,
	USERGROUPS_FAIL,
	USERGROUPS_REQUEST,
	USERGROUPS_SUCCESS
} from '../constants/userConstants';

export const userReducer = (state = {}, action) => {
	switch (action.type) {
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

export const userWithGroupsReducer = (state = { groups: [] }, action) => {
	switch (action.type) {
		case USERGROUPS_REQUEST:
			return {};
		case USERGROUPS_SUCCESS:
			return {};
		case USERGROUPS_FAIL:
			return {};
		default:
			return state;
	}
};
