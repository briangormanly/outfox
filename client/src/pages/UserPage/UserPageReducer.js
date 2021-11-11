export const userPageReducer = (state = {}, action) => {
	switch (action.type) {
		case 'dashboard':
			return {
				...state,
				dashboardActive : true,
				groupsActive    : false,
				resourcesActive : false,
				assignmentsActive : false,
				exploreActive   : false,
				lessonsActive   : false,
				friendsActive   : false,
				helpActive      : false
			};
		case 'groups':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : true,
				resourcesActive : false,
				assignmentsActive : false,
				exploreActive   : false,
				lessonsActive   : false,
				friendsActive   : false,
				helpActive      : false
			};
		case 'resources':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : true,
				assignmentsActive : false,
				exploreActive   : false,
				lessonsActive   : false,
				friendsActive   : false,
				helpActive      : false
			};
		case 'assignments':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : false,
				assignmentsActive : true,
				exploreActive   : false,
				lessonsActive   : false,
				friendsActive   : false,
				helpActive      : false
			};
		case 'explore':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : false,
				assignmentsActive : false,
				exploreActive   : true,
				lessonsActive   : false,
				friendsActive   : false,
				helpActive      : false
			};
		case 'lessons':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : false,
				assignmentsActive : false,
				exploreActive   : false,
				lessonsActive   : true,
				friendsActive   : false,
				helpActive      : false
			};
		case 'calendar':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : false,
				assignmentsActive : false,
				exploreActive   : false,
				lessonsActive   : false,
				friendsActive   : false,
				helpActive      : false
			};
		case 'friends':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : false,
				assignmentsActive : false,
				exploreActive   : false,
				lessonsActive   : false,
				friendsActive   : true,
				helpActive      : false
			};
		case 'help':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : false,
				assignmentsActive : false,
				exploreActive   : false,
				lessonsActive   : false,
				friendsActive   : false,
				helpActive      : true
			};
		default:
			return state;
	}
};
