import {
	GET_ASSIGNMENT,
	EDIT_ASSIGNMENT,
	DELETE_ASSIGNMENT,
	ASSIGNMENT_ADD_RESOURCE,
	ASSIGNMENT_DELETE_RESOURCE,
	ASSIGNMENT_EDIT_RESOURCE
} from '../constants/assignmentConstants';

import assignmentService from '../../services/assignments';

export const getAssignment = (id) => async (dispatch) => {
	try {
		const data = await assignmentService.getAssignmentData(id);
		dispatch({ type: GET_ASSIGNMENT, payload: data });
	} catch (error) {
		console.log('Error with Assignments Request');
	}
};

export const addAssignmentResource = (newResourceObject) => async (dispatch) => {
	try {
		const { resource } = await assignmentService.createAssignment(newResourceObject);
		dispatch({ type: ASSIGNMENT_ADD_RESOURCE, payload: resource });
	} catch (error) {
		console.log('An error occurred during add request');
	}
};

export const editAssignment = (id, newAssignmentObject) => async (dispatch) => {
	try {
		const { assignment } = await assignmentService.editAssignment(id, newAssignmentObject);
		dispatch({ type: EDIT_ASSIGNMENT, payload: assignment });
	} catch (error) {
		console.log(error);
	}
};

export const deleteAssignment = (id) => async (dispatch) => {
	try {
		await assignmentService.deleteAssignment(id);
		dispatch({ type: DELETE_ASSIGNMENT, payload: id});
	} catch (error) {
		console.log(error);
	}
};

export const editAssignmentResource = (resourceID, newResourceObject) => async (
	dispatch
) => {
	try {
		const { resource } = await assignmentService.editResource(
			resourceID,
			newResourceObject
		);
		dispatch({ type: ASSIGNMENT_EDIT_RESOURCE, payload: resource });
	} catch (error) {
		console.log('An error occurred during edit request');
	}
};

export const deleteAssignmentResource = (resourceID) => async (dispatch) => {
	try {
		await assignmentService.deleteResource(resourceID);
		dispatch({ type: ASSIGNMENT_DELETE_RESOURCE, payload: resourceID });
	} catch (error) {
		console.log('An error occurred during delete request');
	}
};
