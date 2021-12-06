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
				helpActive      : false,
				favgActive		: false,
				favrActive		:false
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
				helpActive      : false,
				favgActive		: false,
				favrActive		:false
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
				helpActive      : false,
				favgActive		: false,
				favrActive		:false
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
				helpActive      : false,
				favgActive		: false,
				favrActive		:false
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
				helpActive      : false,
				favgActive		: false,
				favrActive		:false
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
				helpActive      : false,
				favgActive		: false,
				favrActive		:false
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
				helpActive      : false,
				favgActive		: false,
				favrActive		:false
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
				helpActive      : false,
				favgActive		: false,
				favrActive		:false
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
				helpActive      : true,
				favgActive		: false,
				favrActive		:false
			};
		case 'favgroups':
			return{
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : false,
				assignmentsActive : false,
				exploreActive   : false,
				lessonsActive   : false,
				friendsActive   : false,
				helpActive      : false,
				favgActive		: true,
				favrActive		:false
			};
		case 'favresources':
			return{
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : false,
				assignmentsActive : false,
				exploreActive   : false,
				lessonsActive   : false,
				friendsActive   : false,
				helpActive      : false,
				favgActive		: false,
				favrActive		: true
			};
		default:
			return state;
	}
};
