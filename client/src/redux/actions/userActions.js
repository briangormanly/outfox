import {
	USER_FAIL,
	USER_REQUEST,
	USER_SUCCESS,
	AUTH_REQUEST,
	AUTH_FAIL,
	AUTH_SUCCESS
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
