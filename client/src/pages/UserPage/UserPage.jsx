import React, { useEffect, useReducer, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../../redux/actions/userActions';

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
	GroupsP,
	ResourcesP,
	Courses,
	Calendar,
	Friends,
	Help,
	Loader
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

	const storeDispatch = useDispatch();
	const { user, loading, error } = useSelector((state) => state.userDetail);
	const { Groups, Resources, firstname, lastname } = user;
	console.log(Groups);

	useEffect(
		() => {
			storeDispatch(userAction(match.params.id));
		},
		[ storeDispatch, match.params.id ]
	);

	const handleClick = (e) => {
		userPageDispatch({ type: e.currentTarget.name });
	};

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : error ? (
				<p>An Error Occured</p>
			) : (
				<UserPageContainer>
					<TopNavArea>
						<UserTopNav />
					</TopNavArea>
					<SideNavArea dispatch={userPageDispatch}>
						<UserSideNav
							firstName={firstname}
							lastName={lastname}
							handleClick={handleClick}
							state={state}
						/>
					</SideNavArea>
					<ContentArea>
						{dashboardActive && <Dashboard />}
						{groupsActive && <GroupsP />}
						{resourcesActive && <ResourcesP />}
						{coursesActive && <Courses />}
						{calendarActive && <Calendar />}
						{friendsActive && <Friends />}
						{helpActive && <Help />}
					</ContentArea>
				</UserPageContainer>
			)}
		</Fragment>
	);
};

export default UserPage;
