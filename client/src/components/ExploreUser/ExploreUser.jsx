import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import {
	ExploreUserContainer

} from './ExploreUser.elements';

import { GroupAllCard, ResourceCard } from '../index';

const ExploreUser = (exploreUser) => {
	// //const [ exploreUser, setExploreUser ] = useState(null);
	// //const [ groups, setGroups ] = useState([]);
	// const [ resources, setResources ] = useState([]);

	
	
	// useEffect(
	// 	() => {
	// 		// let mounted = true;

	// 		// const getUser = async () => {
	// 		// 	const response = await userService.getUser(exploreId);

	// 		// 	if (mounted) {
	// 		// 		setExploreUser(response);
	// 		// 		setGroups(response.Groups);
	// 		// 		setResources(response.Resources);
	// 		// 	}
	// 		// };

	// 		// getUser();

	// 		// return () => (mounted = false);
	// 	},
	// 	[  ]
	// );

	// const handleConnect = async () => {
	// 	const requestObject = {
	// 		requesterid : userId,
	// 		addresseeid : exploreId
	// 	};

	// 	const response = await friendService.sendFriendRequest(requestObject);
	// 	console.log(response);
	// };

	const handleRemove = async () => {};

	return (
		<ExploreUserContainer>
			{exploreUser && (
				<div>
					{/* <h1>{`${exploreUser.firstname} ${exploreUser.lastname} ${exploreUser.id}`}</h1> */}
					<p>test</p>
					{/* <ButtonGroup>
						<Button edit onClick={handleConnect}>
							Connect
						</Button>
						<Button delete onClick={handleRemove}>
							Remove
						</Button>
					</ButtonGroup> */}
					
				</div>
			)}
		</ExploreUserContainer>
	);
};

export default ExploreUser;
