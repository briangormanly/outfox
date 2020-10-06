import React, { useEffect, useReducer } from 'react';
// import userService from '../../services/users';
import { useDispatch, useSelector } from 'react-redux';
import { userWithGroupsAction } from '../../redux/actions/userActions';

import { UserPageContainer } from './UserPage.elements';

// import axios from 'axios';

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
			<div>User Page</div>
		</UserPageContainer>
	);
};

export default UserPage;
