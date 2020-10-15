import {
	USER_FAIL,
	USER_REQUEST,
	USER_SUCCESS,
	USER_ADD_GROUP,
	USER_LOGOUT,
	AUTH_REQUEST,
	AUTH_FAIL,
	AUTH_SUCCESS,
	AUTH_LOGOUT
} from '../constants/userConstants';

import userService from '../../services/users';
import authService from '../../services/auth';
import groupService from '../../services/groups';

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

		const data = await authService.userAuth(authObject);

		dispatch({ type: AUTH_SUCCESS, payload: data.user.id });
	} catch (error) {
		dispatch({ type: AUTH_FAIL });
	}
};

export const createUserAction = (newUserObject) => async (dispatch) => {
	try {
		dispatch({ type: AUTH_REQUEST });

		const data = await userService.createUser(newUserObject);

		dispatch({ type: AUTH_SUCCESS, payload: data.user.id });
	} catch (error) {
		dispatch({ type: AUTH_FAIL });
	}
};

//  TODO: Add loading and better error catching
export const createGroupAction = (newGroupObject) => async (dispatch) => {
	try {
		const data = await groupService.createGroup(newGroupObject);

		dispatch({ type: USER_ADD_GROUP, payload: data.group });
	} catch (error) {
		console.log('An Error has occurred');
	}
};

export const logoutAction = () => (dispatch) => {
	dispatch({ type: AUTH_LOGOUT });
	dispatch({ type: USER_LOGOUT });
};
