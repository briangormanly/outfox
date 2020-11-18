import React, { useEffect, useReducer, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	userAction,
	getSharedGroups,
	getSharedResources
} from '../../redux/actions/userActions';
import {
	getFriendsList,
	getPendingFriendRequest
} from '../../redux/actions/friendsActions';

import { Route } from 'react-router-dom';

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
	Explore,
	ExploreUser,
	ExploreGroup,
	Friends,
	Loader
} from '../../components';

import { GroupPage } from '../index';

import { userPageReducer } from './UserPageReducer';

const initalState = {
	dashboardActive : true,
	groupsActive    : false,
	resourcesActive : false,
	exploreActive   : false,
	friendsActive   : false,
	helpActive      : false
};

const UserPage = ({ match }) => {
	const [ state, userPageDispatch ] = useReducer(userPageReducer, initalState);

	const storeDispatch = useDispatch();
	const { user, loading, error } = useSelector((state) => state.userDetail);
	const { firstname, lastname } = user;

	useEffect(
		() => {
			storeDispatch(userAction(match.params.id));
			storeDispatch(getFriendsList(match.params.id));
			storeDispatch(getPendingFriendRequest(match.params.id));
			storeDispatch(getSharedResources(match.params.id));
			storeDispatch(getSharedGroups(match.params.id));
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
						<Route exact path={match.path}>
							<Dashboard dashboardPaginate={userPageDispatch} />
						</Route>
						<Route exact path={`${match.path}/groups`}>
							<GroupsP />
						</Route>
						<Route
							exact
							path={`/user/:userID/groups/:groupID`}
							component={GroupPage}
						/>

						<Route exact path={`${match.path}/resources`}>
							<ResourcesP />
						</Route>
						<Route exact path={`${match.path}/explore`} component={Explore} />
						<Route
							exact
							path={`${match.path}/explore/:exploreId`}
							component={ExploreUser}
						/>
						<Route
							exact
							path={`${match.path}/explore/:exploreId/:groupId`}
							component={ExploreGroup}
						/>
						<Route exact path={`${match.path}/friends`} component={Friends} />
					</ContentArea>
				</UserPageContainer>
			)}
		</Fragment>
	);
};

export default UserPage;
