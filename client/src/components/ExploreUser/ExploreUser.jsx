import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import userService from '../../services/users';
import friendService from '../../services/friends';

import {
	ExploreUserContainer,
	ButtonGroup,
	Button,
	Content,
	FlexContainer
} from './ExploreUser.elements';

import { GroupAllCard, ResourceCard } from '../index';

const ExploreUser = () => {
	const [ exploreUser, setExploreUser ] = useState(null);
	const [ groups, setGroups ] = useState([]);
	const [ resources, setResources ] = useState([]);

	const params = useParams();
	const exploreId = parseFloat(params.exploreId);
	const userId = parseFloat(params.id);

	useEffect(
		() => {
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
		},
		[ exploreId ]
	);

	const handleConnect = async () => {
		const requestObject = {
			requesterid : userId,
			addresseeid : exploreId
		};

		const response = await friendService.sendFriendRequest(requestObject);
		console.log(response);
	};

	const handleRemove = async () => {};

	return (
		<ExploreUserContainer>
			{exploreUser && (
				<div>
					<h1>{`${exploreUser.firstname} ${exploreUser.lastname}`}</h1>
					<ButtonGroup>
						<Button edit onClick={handleConnect}>
							Connect
						</Button>
						<Button delete onClick={handleRemove}>
							Remove
						</Button>
					</ButtonGroup>
					<Content>
						<h3>{`${exploreUser.firstname}'s Groups:`}</h3>
						<FlexContainer>
							{groups.map((group) => <GroupAllCard key={group.id} {...group} />)}
						</FlexContainer>
					</Content>
					<Content>
						<h3>{`${exploreUser.firstname}'s Resources:`}</h3>
						<FlexContainer>
							{resources.map((resource) => (
								<ResourceCard
									key={resource.id}
									{...resource}
									showButtons
									showType
									showDates
									showDescription
									resourceAttributes={resource}
								/>
							))}
						</FlexContainer>
					</Content>
				</div>
			)}
		</ExploreUserContainer>
	);
};

export default ExploreUser;
