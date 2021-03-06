import {
	USER_FAIL,
	USER_REQUEST,
	USER_SUCCESS,
	USER_ADD_GROUP,
	USER_LOGOUT,
	AUTH_REQUEST,
	AUTH_FAIL,
	AUTH_SUCCESS,
	AUTH_LOGOUT,
	USER_ADD_RESOURCE,
	USER_EDIT_RESOURCE,
	USER_DELETE_RESOURCE,
	USER_GET_SHARED_GROUPS,
	USER_GET_SHARED_RESOURCES,
	USER_DELETE_SHARED_GROUP,
	USER_DELETE_SHARED_RESOURCE
} from '../constants/userConstants';

import userService from '../../services/users';
import authService from '../../services/auth';
import groupService from '../../services/groups';
import shareService from '../../services/sharing';

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
export const createGroupAction = (newGroupObject, resources) => async (dispatch) => {
	try {
		const data = await groupService.createGroup(newGroupObject);
		const { group } = data;
		console.log(resources);
		console.log(group);

		if (resources) {
			console.log('IN HERE');
			resources.map((resource) => {
				console.log(resource);
				const { description, fileName, link, title, type, uri } = resource;

				const formData = new FormData();

				if (uri) {
					formData.append('uri', uri);
				}

				formData.append('link', link);
				formData.append('type', type);
				formData.append('title', title);
				formData.append('description', description);
				formData.append('mutable', false);
				formData.append('fileName', fileName);
				formData.append('GroupId', group.id);

				try {
					dispatch(addUserResource(formData));
				} catch (error) {
					console.log(error);
				}
			});
		}

		dispatch({ type: USER_ADD_GROUP, payload: data.group });
	} catch (error) {
		console.log('An Error has occurred');
	}
};

export const editUserResource = (resourceID, newResourceObject) => async (
	dispatch
) => {
	try {
		const { resource } = await groupService.editResource(
			resourceID,
			newResourceObject
		);

		dispatch({ type: USER_EDIT_RESOURCE, payload: resource });
	} catch (error) {
		console.log('An error occurred during edit request');
	}
};

export const deleteUserResource = (resourceID) => async (dispatch) => {
	try {
		await groupService.deleteResource(resourceID);
		dispatch({ type: USER_DELETE_RESOURCE, payload: resourceID });
	} catch (error) {
		console.log('An error occurred during delete request');
	}
};

export const addUserResource = (newResourceObject) => async (dispatch) => {
	try {
		const { resource } = await groupService.createResource(newResourceObject);
		dispatch({ type: USER_ADD_RESOURCE, payload: resource });
	} catch (error) {
		console.log('An error occurred during add request');
	}
};

export const getSharedGroups = (id) => async (dispatch) => {
	try {
		const data = await shareService.getSharedGroups(id);
		dispatch({ type: USER_GET_SHARED_GROUPS, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const getSharedResources = (id) => async (dispatch) => {
	try {
		const data = await shareService.getSharedResources(id);
		dispatch({ type: USER_GET_SHARED_RESOURCES, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteSharedResource = (id) => async (dispatch) => {
	try {
		await shareService.deleteSharedResource(id);
		dispatch({ type: USER_DELETE_SHARED_RESOURCE, payload: id });
	} catch (error) {
		console.log(error);
	}
};

export const deleteSharedGroup = (id) => async (dispatch) => {
	try {
		await shareService.deleteSharedGroup(id);
		dispatch({ type: USER_DELETE_SHARED_GROUP, payload: id });
	} catch (error) {
		console.log(error);
	}
};

export const logoutAction = () => (dispatch) => {
	dispatch({ type: AUTH_LOGOUT });
	dispatch({ type: USER_LOGOUT });
};
