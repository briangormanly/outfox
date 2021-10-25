import {
	GET_ASSIGNMENT,
	EDIT_ASSIGNMENT,
	DELETE_ASSIGNMENT,
	ASSIGNMENT_ADD_RESOURCE,
	ASSIGNMENT_DELETE_RESOURCE,
	ASSIGNMENT_EDIT_RESOURCE
} from '../constants/assignmentConstants';

export const assignmentReducer = (
	state = {
		date        : '',
		description : '',
		title       : '',
		resources   : []
	},
	action
) => {
	switch (action.type) {
		case GET_ASSIGNMENT: {
			const { Resources, title, description, opendate } = action.payload;

			return {
				...state,
				resources   : [ ...Resources ],
				title       : title,
				description : description,
				date        : opendate
			};
		}
		case EDIT_ASSIGNMENT: {
			const {title, description, opendate} = action.payload;
			return {
				...state,
				title       : title,
				description : description,
				date        : opendate
			};
		}
		case DELETE_ASSIGNMENT:
			return { ...state };
		case ASSIGNMENT_ADD_RESOURCE:
			return { ...state, resources: [ ...state.resources, action.payload ] };
		case ASSIGNMENT_DELETE_RESOURCE: {
			const filteredResources = state.resources.filter(
				(resource) => resource.id !== action.payload
			);
			return {
				...state,
				resources : [ ...filteredResources ]
			};
		}
		case ASSIGNMENT_EDIT_RESOURCE: {
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

		default:
			return state;
	}
};
