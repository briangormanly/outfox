import React, { useEffect, useReducer, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userWithGroupsAction } from '../../redux/actions/userActions';

import {
	UserPageContainer,
	ContentArea,
	SideNavArea,
	TopNavArea
} from './UserPage.elements';

import { UserTopNav, UserSideNav } from '../../components';

const UserPage = ({ match }) => {
	const dispatch = useDispatch();
	const { loading, error, userWithGroups } = useSelector(
		(state) => state.userWithGroups
	);

	console.log(userWithGroups);
	console.log(error);
	console.log(loading);

	useEffect(
		() => {
			dispatch(userWithGroupsAction(match.params.id));
		},
		[ dispatch, match ]
	);

	return (
		<Fragment>
			{userWithGroups ? (
				<UserPageContainer>
					<TopNavArea>
						<UserTopNav />
					</TopNavArea>
					<SideNavArea>
						<UserSideNav
							firstName={userWithGroups.firstname}
							lastName={userWithGroups.lastname}
						/>
					</SideNavArea>
					<ContentArea />
				</UserPageContainer>
			) : null}
		</Fragment>
	);
};

export default UserPage;
