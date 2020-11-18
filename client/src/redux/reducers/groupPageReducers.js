import {
	GET_GROUP,
	EDIT_GROUP,
	DELETE_GROUP,
	GROUP_ADD_RESOURCE,
	GROUP_DELETE_RESOURCE,
	GROUP_EDIT_RESOURCE
} from '../constants/groupPageConstants';

export const groupPageReducer = (
	state = {
		date        : '',
		description : '',
		title       : '',
		resources   : []
	},
	action
) => {
	switch (action.type) {
		case GET_GROUP: {
			const { Resources, groupname, groupdescription, datetimeadd } = action.payload;

			return {
				...state,
				resources   : [ ...Resources ],
				title       : groupname,
				description : groupdescription,
				date        : datetimeadd
			};
		}
		case EDIT_GROUP: {
			const { groupname, groupdescription, datetimeadd } = action.payload;
			return {
				...state,
				title       : groupname,
				description : groupdescription,
				date        : datetimeadd
			};
		}
		case DELETE_GROUP:
			return { ...state };
		case GROUP_ADD_RESOURCE:
			return { ...state, resources: [ ...state.resources, action.payload ] };
		case GROUP_DELETE_RESOURCE: {
			const filteredResources = state.resources.filter(
				(resource) => resource.id !== action.payload
			);
			return {
				...state,
				resources : [ ...filteredResources ]
			};
		}
		case GROUP_EDIT_RESOURCE: {
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
