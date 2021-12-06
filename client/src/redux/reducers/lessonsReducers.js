import {
    GET_LESSON,
    EDIT_LESSON,
    DELETE_LESSON,
    LESSON_ADD_RESOURCE,
    LESSON_DELETE_RESOURCE,
    LESSON_EDIT_RESOURCE,
    LESSON_ADD_ASSIGNMENT,
    LESSON_DELETE_ASSIGNMENT,
    LESSON_EDIT_ASSIGNMENT
} from '../constants/lessonsConstants';

export const lessonsReducer = (
    state = {
        date        : '',
        description : '',
        title       : '',
        resources   : [],
        assignments   : []
    },
    action
) => {
    switch (action.type) {
        case GET_LESSON: {
            const { Resources, Assignments, title, description} = action.payload;

            return {
                ...state,
                resources   : [ ...Resources ],
                assignments  : [ ...Assignments ],
                title       : title,
                description : description,
            
            };
        }
        case EDIT_LESSON: {
            const { title, description} = action.payload;
            return {
                ...state,
                title       : title,
                description : description,
            };
        }
        case DELETE_LESSON:
            return { ...state };

        case LESSON_ADD_RESOURCE:
            return { ...state, resources: [ ...state.resources, action.payload ] };

        case LESSON_DELETE_RESOURCE: {
            const filteredResources = state.resources.filter(
                (resource) => resource.id !== action.payload
            );
            return {
                ...state,
                resources : [ ...filteredResources ]
            };
        }

        case LESSON_EDIT_RESOURCE: {
            const newResourceList = state.resources.map((resource) => {
                if (resource.id === action.payload.id) {
                    return action.payload;
                } else {
                    return resource;
                }
            });

            return {
                ...state,
                resources : [ ...newResourceList ]
            };
        }

        case LESSON_ADD_ASSIGNMENT:
            return { ...state, assignments: [ ...state.assignments, action.payload ] };
            
        case LESSON_DELETE_ASSIGNMENT: {
            const filteredAssignments = state.assignments.filter(
                (assignment) => assignment.id !== action.payload
            );
            return {
                ...state,
                assignments : [ ...filteredAssignments ]
            };
        }
        case LESSON_EDIT_ASSIGNMENT: {
            const newAssignmentList = state.assignments.map((assignment) => {
                if (assignment.id === action.payload.id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });

            return {
                ...state,
                assignments : [ ...newAssignmentList ]
            };
        }

        default:
            return state;
    }
};
