import React, { useEffect, useReducer, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userWithGroupsAction } from '../../redux/actions/userActions';

import {
	UserPageContainer,
	ContentArea,
	SideNavArea,
	TopNavArea
} from './UserPage.elements';

import {
	UserTopNav,
	UserSideNav,
	Dashboard,
	Groups,
	Resources,
	Courses,
	Calendar,
	Friends,
	Help
} from '../../components';

import { userPageReducer } from './UserPageReducer';

const initalState = {
	dashboardActive : true,
	groupsActive    : false,
	resourcesActive : false,
	coursesActive   : false,
	calendarActive  : false,
	friendsActive   : false,
	helpActive      : false
};

const UserPage = ({ match }) => {
	const [ state, userPageDispatch ] = useReducer(userPageReducer, initalState);

	const {
		dashboardActive,
		groupsActive,
		resourcesActive,
		coursesActive,
		calendarActive,
		friendsActive,
		helpActive
	} = state;

	const dispatch = useDispatch();
	const { loading, error, userWithGroups } = useSelector(
		(state) => state.userWithGroups
	);

	useEffect(
		() => {
			dispatch(userWithGroupsAction(match.params.id));
		},
		[ dispatch, match ]
	);

	const handleClick = (e) => {
		// console.log(e.currentTarget);
		userPageDispatch({ type: e.currentTarget.name });
	};

	return (
		<Fragment>
			{userWithGroups ? (
				<UserPageContainer>
					<TopNavArea>
						<UserTopNav />
					</TopNavArea>
					<SideNavArea dispatch={userPageDispatch}>
						<UserSideNav
							firstName={userWithGroups.firstname}
							lastName={userWithGroups.lastname}
							handleClick={handleClick}
							state={state}
						/>
					</SideNavArea>
					<ContentArea>
						{dashboardActive && <Dashboard />}
						{groupsActive && <Groups />}
						{resourcesActive && <Resources />}
						{coursesActive && <Courses />}
						{calendarActive && <Calendar />}
						{friendsActive && <Friends />}
						{helpActive && <Help />}
					</ContentArea>
				</UserPageContainer>
			) : null}
		</Fragment>
	);
};

export default UserPage;
