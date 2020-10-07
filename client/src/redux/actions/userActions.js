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

import userRequests from '../../services/users';

export const userAction = (id) => async (dispatch) => {
	try {
		dispatch({ type: USER_REQUEST });

		const data = await userRequests.getUser(id);

		dispatch({ type: USER_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: USER_FAIL, payload: error.message });
	}
};

export const userWithGroupsAction = (id) => async (dispatch) => {
	try {
		dispatch({ type: USERGROUPS_REQUEST });

		const data = await userRequests.getUserWithGroups(id);

		dispatch({ type: USERGROUPS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: USERGROUPS_FAIL, payload: error.message });
	}
};

export const setUserAction = (user) => (dispatch) => {
	dispatch({ type: USER_SET, payload: user });
};

// export const userAuthAction = (user) => (dispatch) => {
// 	dispatch({ type: USER_AUTH, payload: user });
// };
