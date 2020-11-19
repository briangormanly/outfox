import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import userService from '../../services/users';

import { ExploreContainer, UserContainer } from './Explore.elements';

import { ExploreUserCard } from '../index';

const Explore = () => {
	const [ users, setUsers ] = useState([]);
	const params = useParams();
	const currentUserId = parseFloat(params.id);

	useEffect(() => {
		let mounted = true;

		const getUsers = async () => {
			const response = await userService.getAll();
			if (mounted) {
				setUsers(response);
			}
		};

		getUsers();

		return () => (mounted = false);
	}, []);

	const filteredUsers = users.filter((user) => user.id !== currentUserId);

	return (
		<ExploreContainer>
			<h1>Explore</h1>
			<UserContainer>
				{filteredUsers &&
					filteredUsers.map((user) => <ExploreUserCard key={user.id} {...user} />)}
			</UserContainer>
		</ExploreContainer>
	);
};

export default Explore;
