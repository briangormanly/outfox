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
  USER_ADD_LESSON,
  USER_EDIT_LESSON,
  USER_DELETE_LESSON,
  USER_GET_SHARED_GROUPS,
  USER_GET_SHARED_RESOURCES,
  USER_DELETE_SHARED_GROUP,
  USER_DELETE_SHARED_RESOURCE,
  USER_DELETE_SHARED_ASSIGNMENT,
  USER_ADD_ASSIGNMENT,
  USER_EDIT_ASSIGNMENT,
  USER_DELETE_ASSIGNMENT,
  USER_GET_SHARED_ASSIGNMENTS,
  USER_GET_SHARED_LESSONS,
  USER_DELETE_SHARED_LESSON,
} from "../constants/userConstants";

import userService from "../../services/users";
import authService from "../../services/auth";
import groupService from "../../services/groups";
import shareService from "../../services/sharing";
import lessonService from "../../services/lesson";
import assignmentService from "../../services/assignments";

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
export const createGroupAction = (newGroupObject, resources) => async (
  dispatch
) => {
  try {
    const data = await groupService.createGroup(newGroupObject);
    const { group } = data;
    console.log(resources);
    console.log(group);

    if (resources) {
      console.log("IN HERE");
      resources.map((resource) => {
        console.log(resource);
        const { description, fileName, link, title, type, uri } = resource;

        const formData = new FormData();

        if (uri) {
          formData.append("uri", uri);
        }

        formData.append("link", link);
        formData.append("type", type);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("mutable", false);
        formData.append("fileName", fileName);
        formData.append("GroupId", group.id);

        try {
          dispatch(addUserResource(formData));
        } catch (error) {
          console.log(error);
        }
      });
    }

    dispatch({ type: USER_ADD_GROUP, payload: data.group });
  } catch (error) {
    console.log("An Error has occurred");
  }
};

export const createAssignmentAction = (
  newAssignmentObject,
  resources
) => async (dispatch) => {
  try {
    const data = await assignmentService.createAssignment(newAssignmentObject);
    const { assignment } = data;
    console.log(resources);
    console.log(assignment);

    if (resources) {
      console.log("IN HERE");
      resources.map((resource) => {
        console.log(resource);
        const { description, fileName, link, title, type, uri } = resource;

        const formData = new FormData();

        if (uri) {
          formData.append("uri", uri);
        }

        formData.append("link", link);
        formData.append("type", type);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("mutable", false);
        formData.append("fileName", fileName);
        formData.append("AssignmentId", assignment.id);

        try {
          dispatch(addUserResource(formData));
        } catch (error) {
          console.log(error);
        }
      });
    }

    dispatch({ type: USER_ADD_GROUP, payload: data.group });
  } catch (error) {
    console.log("An Error has occurred");
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
    console.log("An error occurred during edit request");
  }
};

export const deleteUserResource = (resourceID) => async (dispatch) => {
  try {
    await groupService.deleteResource(resourceID);
    dispatch({ type: USER_DELETE_RESOURCE, payload: resourceID });
  } catch (error) {
    console.log("An error occurred during delete request");
  }
};

export const addUserResource = (newResourceObject) => async (dispatch) => {
  try {
    const { resource } = await groupService.createResource(newResourceObject);
    dispatch({ type: USER_ADD_RESOURCE, payload: resource });
  } catch (error) {
    console.log("An error occurred during add request");
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

export const getSharedAssignments = (id) => async (dispatch) => {
  try {
    const data = await shareService.getSharedAssignments(id);
    dispatch({ type: USER_GET_SHARED_ASSIGNMENTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSharedAssignment = (id) => async (dispatch) => {
  try {
    await shareService.deleteSharedAssignments(id);
    dispatch({ type: USER_DELETE_SHARED_ASSIGNMENT, payload: id });
  } catch (error) {
    console.log(error);
  }
};

//lessons

//  TODO: Add loading and better error catching
export const createLessonAction = (newLessonObject, resources, assignments) => async (
  dispatch
) => {
  try {
    const data = await lessonService.createLesson(newLessonObject);
    const { lesson } = data;
    console.log(resources);
    console.log(assignments);
    console.log(lesson);

    if (resources) {
      console.log("IN HERE");
      resources.map((resource) => {
        console.log(resource);
        const { description, fileName, link, title, type, uri } = resource;

        const formData = new FormData();

        if (uri) {
          formData.append("uri", uri);
        }

        formData.append("link", link);
        formData.append("type", type);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("mutable", false);
        formData.append("fileName", fileName);
        formData.append("LessonId", lesson.id);

        try {
          dispatch(addUserResource(formData));
        } catch (error) {
          console.log(error);
        }
      });
    }

    if (assignments) {
      console.log("IN HERE");
      assignments.map((assignment) => {
        console.log(assignment);
        const { description, title, opendate, duedate, closedate, status, grade } = assignment;

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("mutable", false);
        formData.append("opendate", opendate);
        formData.append("duedate", duedate);
        formData.append("closedate", closedate);
        formData.append("status", status);
        formData.append("grade", grade);
        formData.append("LessonId", lesson.id);

        try {
          dispatch(addAssignment(formData));
        } catch (error) {
          console.log(error);
        }
      });
    }

    dispatch({ type: USER_ADD_LESSON, payload: data.group });
  } catch (error) {
    console.log("An Error has occurred");
  }
};


export const getSharedLessons = (id) => async (dispatch) => {
  try {
    const data = await shareService.getSharedLessons(id);
    dispatch({ type: USER_GET_SHARED_LESSONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSharedLesson = (id) => async (dispatch) => {
  try {
    await shareService.deleteSharedLessons(id);
    dispatch({ type: USER_DELETE_SHARED_LESSON, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const logoutAction = () => (dispatch) => {
  dispatch({ type: AUTH_LOGOUT });
  dispatch({ type: USER_LOGOUT });
};

export const addLesson = (newLessonObject) => async (dispatch) => {
  try {
    const { lesson } = await lessonService.createLesson(newLessonObject);
    dispatch({ type: USER_ADD_LESSON, payload: lesson });
  } catch (error) {
    console.log("An error occurred during add request");
  }
};

export const editUserLesson = (lessonID, newLessonObject) => async (
  dispatch
) => {
  try {
    const { lesson } = await lessonService.editLesson(
      lessonID,
      newLessonObject
    );

    dispatch({ type: USER_EDIT_LESSON, payload: lesson });
  } catch (error) {
    console.log("An error occurred during edit request");
  }
};

export const deleteUserLesson = (lessonID) => async (dispatch) => {
  try {
    await lessonService.deleteLesson(lessonID);
    dispatch({ type: USER_DELETE_LESSON, payload: lessonID });
  } catch (error) {
    console.log("An error occurred during delete request");
  }
};

export const addAssignment = (newAssignmentObject) => async (dispatch) => {
  try {
    const { assignment } = await assignmentService.createAssignment(
      newAssignmentObject
    );
    dispatch({ type: USER_ADD_ASSIGNMENT, payload: assignment });
  } catch (error) {
    console.log("An error occurred during add request");
  }
};

export const editUserAssignment = (assignmentID, newAssignmentObject) => async (
  dispatch
) => {
  try {
    const { assignment } = await assignmentService.editAssignment(
      assignmentID,
      newAssignmentObject
    );

    dispatch({ type: USER_EDIT_ASSIGNMENT, payload: assignment });
  } catch (error) {
    console.log("An error occurred during edit request");
  }
};

export const deleteUserAssignment = (assignmentID) => async (dispatch) => {
  try {
    await assignmentService.deleteAssignment(assignmentID);
    dispatch({ type: USER_DELETE_ASSIGNMENT, payload: assignmentID });
  } catch (error) {
    console.log("An error occurred during delete request");
  }
};
