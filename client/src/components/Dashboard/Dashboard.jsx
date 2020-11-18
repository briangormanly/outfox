import React from 'react';

import {
	DashboardGroups,
	DashboardFriends,
	DashboardResources,
	DashboardSharedResources,
	DashboardSharedGroups
} from '../index';

import {
	DashboardContainer,
	GroupContainer,
	FriendContainer,
	ResourceContainer,
	SharedResourceContainer,
	SharedGroupContainer
} from './Dashboard.elements';

const Dashboard = ({ dashboardPaginate }) => {
	return (
		<DashboardContainer>
			<GroupContainer>
				<DashboardGroups dashboardPaginate={dashboardPaginate} />
			</GroupContainer>
			<FriendContainer>
				<DashboardFriends />
			</FriendContainer>
			<ResourceContainer>
				<DashboardResources dashboardPaginate={dashboardPaginate} />
			</ResourceContainer>
			<SharedResourceContainer>
				<DashboardSharedResources />
			</SharedResourceContainer>
			<SharedGroupContainer>
				<DashboardSharedGroups />
			</SharedGroupContainer>
		</DashboardContainer>
	);
};

export default Dashboard;
