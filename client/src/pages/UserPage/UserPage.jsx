import React, { useEffect, useReducer, Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../../redux/actions/userActions';

import { Route, useLocation } from 'react-router-dom';

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

	// const {
	// 	dashboardActive,
	// 	groupsActive,
	// 	resourcesActive,
	// 	coursesActive,
	// 	calendarActive,
	// 	friendsActive,
	// 	helpActive
	// } = state;

	const storeDispatch = useDispatch();
	const { user, loading, error } = useSelector((state) => state.userDetail);
	const { Groups, Resources, firstname, lastname } = user;

	const [ updateFlag, setUpdateFlag ] = useState(1);

	useEffect(
		() => {
			storeDispatch(userAction(match.params.id));
		},
		[ storeDispatch, match.params.id, updateFlag ]
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
					{/* TODO: Refactor Prop Drilling Here */}
					<ContentArea>
						<Route exact path={match.path}>
							<Dashboard
								dashboardPaginate={userPageDispatch}
								updateFlag={updateFlag}
								setUpdateFlag={setUpdateFlag}
							/>
						</Route>
						<Route path={`${match.path}/groups`}>
							<GroupsP groups={Groups} />
						</Route>
						<Route path={`${match.path}/resources`}>
							<ResourcesP
								resources={Resources}
								updateFlag={updateFlag}
								setUpdateFlag={setUpdateFlag}
							/>
						</Route>
						<Route path={`${match.path}/friends`} component={Friends} />
						{/* {dashboardActive && (
							<Dashboard
								dashboardPaginate={userPageDispatch}
								updateFlag={updateFlag}
								setUpdateFlag={setUpdateFlag}
							/>
						)}
						{groupsActive && <GroupsP groups={Groups} />}
						{resourcesActive && (
							<ResourcesP
								resources={Resources}
								updateFlag={updateFlag}
								setUpdateFlag={setUpdateFlag}
							/>
						)}
						{coursesActive && <Courses />}
						{calendarActive && <Calendar />}
						{friendsActive && <Friends />}
						{helpActive && <Help />} */}
					</ContentArea>
				</UserPageContainer>
			)}
		</Fragment>
	);
};

export default UserPage;
