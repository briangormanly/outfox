import {
	USER_FAIL,
	USER_REQUEST,
	USER_SUCCESS,
	AUTH_REQUEST,
	AUTH_FAIL,
	AUTH_SUCCESS,
	USER_SET,
	// USER_AUTH,
	USERGROUPS_FAIL,
	USERGROUPS_REQUEST,
	USERGROUPS_SUCCESS
} from '../constants/userConstants';

import userService from '../../services/users';
import authService from '../../services/auth';

export const userAction = (id) => async (dispatch) => {
	try {
		dispatch({ type: USER_REQUEST });

		const data = await userService.getUser(id);

		dispatch({ type: USER_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: USER_FAIL });
	}
};

export const authAction = (authObject) => async (dispatch) => {
	try {
		dispatch({ type: AUTH_REQUEST });

		//AXIOS REQUEST
		const data = await authService.userAuth(authObject);

		dispatch({ type: AUTH_SUCCESS, payload: data.user.id });
		// dispatch({ type: AUTH_REQUEST, payload: response });
	} catch (error) {
		dispatch({ type: AUTH_FAIL });
	}
};
//
//
//
//
//
//
//
//
//
export const userWithGroupsAction = (id) => async (dispatch) => {
	try {
		dispatch({ type: USERGROUPS_REQUEST });

		const data = await userService.getUserWithGroups(id);

		dispatch({ type: USERGROUPS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: USERGROUPS_FAIL, payload: error.message });
	}
};

export const setUserAction = (user) => (dispatch) => {
	dispatch({ type: USER_SET, payload: user });
};
