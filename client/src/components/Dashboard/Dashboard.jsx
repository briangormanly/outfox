import React from 'react';

import { DashboardGroups } from '../index';

import {
	DashboardContainer,
	GroupContainer,
	FriendContainer,
	ResourceContainer,
	CourseContainer
} from './Dashboard.elements';

const Dashboard = () => {
	return (
		<DashboardContainer>
			<GroupContainer>
				<DashboardGroups />
			</GroupContainer>
			<FriendContainer>
				<h1>Friends Activity</h1>

				{/*  */}
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
