import React from 'react';

import { DashboardGroups, DashboardFriends, DashboardResources } from '../index';

import {
	DashboardContainer,
	GroupContainer,
	FriendContainer,
	ResourceContainer,
	CourseContainer
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
				<DashboardResources />
			</ResourceContainer>
		</DashboardContainer>
	);
};

export default Dashboard;
