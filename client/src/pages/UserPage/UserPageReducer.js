export const userPageReducer = (state = {}, action) => {
	switch (action.type) {
		case 'dashboard':
			return {
				...state,
				dashboardActive : true,
				groupsActive    : false,
				resourcesActive : false,
				coursesActive   : false,
				calendarActive  : false,
				friendsActive   : false,
				helpActive      : false
			};
		case 'groups':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : true,
				resourcesActive : false,
				coursesActive   : false,
				calendarActive  : false,
				friendsActive   : false,
				helpActive      : false
			};
		case 'resources':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : true,
				coursesActive   : false,
				calendarActive  : false,
				friendsActive   : false,
				helpActive      : false
			};
		case 'courses':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : false,
				coursesActive   : true,
				calendarActive  : false,
				friendsActive   : false,
				helpActive      : false
			};
		case 'calendar':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : false,
				coursesActive   : false,
				calendarActive  : true,
				friendsActive   : false,
				helpActive      : false
			};
		case 'friends':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : false,
				coursesActive   : false,
				calendarActive  : false,
				friendsActive   : true,
				helpActive      : false
			};
		case 'help':
			return {
				...state,
				dashboardActive : false,
				groupsActive    : false,
				resourcesActive : false,
				coursesActive   : false,
				calendarActive  : false,
				friendsActive   : false,
				helpActive      : true
			};
		default:
			return state;
	}
};
