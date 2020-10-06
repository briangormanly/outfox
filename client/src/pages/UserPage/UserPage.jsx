import React, { useEffect, useReducer } from 'react';
import userService from '../../services/users';
import { UserPageContainer } from './UserPage.elements';

import axios from 'axios';

function UserPage() {
	useEffect(() => {
		const fetchUser = async () => {
			const data = await userService.getUserWithGroups(1);
			console.log(data);
		};

		fetchUser();
	}, []);

	return (
		<UserPageContainer>
			<div>User Page</div>
		</UserPageContainer>
	);
}

export default UserPage;
