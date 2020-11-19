import {
	GET_GROUP,
	EDIT_GROUP,
	DELETE_GROUP,
	GROUP_ADD_RESOURCE,
	GROUP_DELETE_RESOURCE,
	GROUP_EDIT_RESOURCE
} from '../constants/groupPageConstants';

import groupService from '../../services/groups';

export const getGroup = (groupID) => async (dispatch) => {
	try {
		const data = await groupService.getGroupData(groupID);
		dispatch({ type: GET_GROUP, payload: data });
	} catch (error) {
		console.log('Error with Group Request');
	}
};

export const addGroupResource = (newResourceObject) => async (dispatch) => {
	try {
		const { resource } = await groupService.createResource(newResourceObject);
		dispatch({ type: GROUP_ADD_RESOURCE, payload: resource });
	} catch (error) {
		console.log('An error occurred during add request');
	}
};

export const editGroup = (groupID, newGroupObject) => async (dispatch) => {
	try {
		const { group } = await groupService.editGroup(groupID, newGroupObject);
		dispatch({ type: EDIT_GROUP, payload: group });
	} catch (error) {
		console.log(error);
	}
};

export const deleteGroup = (groupID) => async (dispatch) => {
	try {
		await groupService.deleteGroup(groupID);
		dispatch({ type: DELETE_GROUP, payload: groupID });
	} catch (error) {
		console.log(error);
	}
};

export const editGroupResource = (resourceID, newResourceObject) => async (
	dispatch
) => {
	try {
		const { resource } = await groupService.editResource(
			resourceID,
			newResourceObject
		);
		dispatch({ type: GROUP_EDIT_RESOURCE, payload: resource });
	} catch (error) {
		console.log('An error occurred during edit request');
	}
};

export const deleteGroupResource = (resourceID) => async (dispatch) => {
	try {
		await groupService.deleteResource(resourceID);
		dispatch({ type: GROUP_DELETE_RESOURCE, payload: resourceID });
	} catch (error) {
		console.log('An error occurred during delete request');
	}
};
