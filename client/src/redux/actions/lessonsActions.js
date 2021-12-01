import {
    GET_LESSON,
    EDIT_LESSON,
    DELETE_LESSON,
    LESSON_ADD_RESOURCE,
    LESSON_DELETE_RESOURCE,
    LESSON_EDIT_RESOURCE,
    LESSON_ADD_ASSIGNMENT,
    LESSON_EDIT_ASSIGNMENT,
    LESSON_DELETE_ASSIGNMENT,
} from '../constants/lessonsConstants';

import lessonService from '../../services/lesson';


export const getLesson = (lessonID) => async (dispatch) => {
    try {
        const data = await lessonService.getLessonData(lessonID);
        dispatch({ type: GET_LESSON, payload: data });
    } catch (error) {
        console.log('Error with Lesson Request');
    }
};

export const addLessonResource = (newResourceObject) => async (dispatch) => {
    try {
        const { resource } = await lessonService.createResource(newResourceObject);
        dispatch({ type: LESSON_ADD_RESOURCE, payload: resource });
    } catch (error) {
        console.log('An error occurred during add request');
    }
};


export const editLesson = (lessonID, newLessonObject) => async (dispatch) => {
    try {
        const { lesson } = await lessonService.editLesson(lessonID, newLessonObject);
        dispatch({ type: EDIT_LESSON, payload: lesson});
    } catch (error) {
        console.log(error);
    }
};

export const deleteLesson = (lessonID) => async (dispatch) => {
    try {
        await lessonService.deleteLesson(lessonID);
        dispatch({ type: DELETE_LESSON, payload: lessonID });
    } catch (error) {
        console.log(error);
    }
};

export const editLessonResource = (resourceID, newResourceObject) => async (
    dispatch
) => {
    try {
        const { resource } = await lessonService.editResource(
            resourceID,
            newResourceObject
        );
        dispatch({ type: LESSON_EDIT_RESOURCE, payload: resource });
    } catch (error) {
        console.log('An error occurred during edit request');
    }
};

export const deleteLessonResource = (resourceID) => async (dispatch) => {
    try {
        await lessonService.deleteResource(resourceID);
        dispatch({ type: LESSON_DELETE_RESOURCE, payload: resourceID });
    } catch (error) {
        console.log('An error occurred during delete request');
    }
};


export const addLessonAssignment = (newAssignmentObject) => async (dispatch) => {
    try {
        const { assignment } = await lessonService.createAssignment(newAssignmentObject);
        dispatch({ type: LESSON_ADD_ASSIGNMENT, payload: assignment });
    } catch (error) {
        console.log('An error occurred during add request');
    }
};

export const editLessonAssignment = (assignmentID, newAssignmentObject) => async (
    dispatch
) => {
    try {
        const { assignment } = await lessonService.editAssignment(
            assignmentID,
            newAssignmentObject
        );
        dispatch({ type: LESSON_EDIT_ASSIGNMENT, payload: assignment });
    } catch (error) {
        console.log('An error occurred during edit request');
    }
};

export const deleteLessonAssignment = (assignmentID) => async (dispatch) => {
    try {
        await lessonService.deleteAssignment(assignmentID);
        dispatch({ type: LESSON_DELETE_ASSIGNMENT, payload: assignmentID });
    } catch (error) {
        console.log('An error occurred during delete request');
    }
};
