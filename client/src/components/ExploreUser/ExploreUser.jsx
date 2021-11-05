import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import {
	ExploreUserContainer,
	Button,
	ButtonGroup

} from './ExploreUser.elements';

import { GroupAllCard, ResourceCard } from '../index';

const ExploreUser = (props) => {
	const [ recUser, setRecUser ] = useState(null);
	const [ groups, setGroups ] = useState([]);
	const [ resources, setResources ] = useState([]);

	
	
	
	const handleConnect = async () => {
		// const requestObject = {
		// 	requesterid : userId,
		// 	addresseeid : exploreId
		// };

		// const response = await friendService.sendFriendRequest(requestObject);
		// console.log(response);
		console.log("wouldve done a thing");
	};

	const handleRemove = async () => {};

	return (
		<ExploreUserContainer>
			{recUser && (
				<div>
					<h1>{`${props.firstname} ${props.lastname} ${props.id}`}</h1>
					<p>test</p>
					<ButtonGroup>
						<Button edit onClick={handleConnect}>
							Connect
						</Button>
						<Button delete onClick={handleRemove}>
							Remove
						</Button>
					</ButtonGroup>
					
				</div>
			)}
		</ExploreUserContainer>
	);
};

export default ExploreUser;
