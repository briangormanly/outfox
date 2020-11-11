import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import userService from '../../services/users';

import {
	ExploreUserContainer,
	ButtonGroup,
	Button,
	Content
} from './ExploreUser.elements';

const ExploreUser = () => {
	const [ exploreUser, setExploreUser ] = useState(null);
	const [ groups, setGroups ] = useState([]);
	const [ resources, setResources ] = useState([]);

	const params = useParams();
	const exploreId = parseFloat(params.exploreId);

	useEffect(() => {
		let mounted = true;

		const getUser = async () => {
			const response = await userService.getUser(exploreId);

			if (mounted) {
				setExploreUser(response);
				setGroups(response.Groups);
				setResources(response.Resources);
			}
		};

		getUser();

		return () => (mounted = false);
	}, []);

	console.log(exploreUser);
	console.log(groups);
	console.log(resources);

	return (
		<ExploreUserContainer>
			{exploreUser && (
				<div>
					<h1>{`${exploreUser.firstname} ${exploreUser.lastname}`}</h1>
					<ButtonGroup>
						<Button edit>Connect</Button>
						<Button delete>Remove</Button>
					</ButtonGroup>
					<Content>
						<h3>{`${exploreUser.firstname}'s Groups:`}</h3>
					</Content>
					<Content>
						<h3>{`${exploreUser.firstname}'s Resources:`}</h3>
					</Content>
				</div>
			)}
		</ExploreUserContainer>
	);
};

export default ExploreUser;
