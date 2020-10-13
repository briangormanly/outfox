import React from 'react';

import { DashboardGroups, DashboardFriends } from '../index';

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
				<h1>My Resources</h1>

				{/*  */}
			</ResourceContainer>
			<CourseContainer>
				<h1>My Courses</h1>
			</CourseContainer>
		</DashboardContainer>
	);
};

export default Dashboard;
