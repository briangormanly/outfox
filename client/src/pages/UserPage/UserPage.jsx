import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userWithGroupsAction } from '../../redux/actions/userActions';

import {
	UserPageContainer,
	ContentArea,
	SideNavArea,
	TopNavArea
} from './UserPage.elements';

import { UserTopNav } from '../../components';

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
		[ dispatch ]
	);

	return (
		<UserPageContainer>
			<TopNavArea>
				<UserTopNav />
			</TopNavArea>
			<SideNavArea />
			<ContentArea />
		</UserPageContainer>
	);
};

export default UserPage;
