import React from 'react';

import { FriendsContainer } from './DashboardFriends.elements';
import { DashboardFriendsCard } from '../index';

import { friendsData } from './friendsData';

const DashboardFriends = () => {
	return (
		<FriendsContainer>
			<h1>Friends Activity</h1>
			{/* {friendsData.map((friend) => (
				<DashboardFriendsCard key={friend.id} {...friend} />
			))} */}
		</FriendsContainer>
	);
};

export default DashboardFriends;
