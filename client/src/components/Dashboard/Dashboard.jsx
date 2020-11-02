import React from 'react';

import { DashboardGroups, DashboardFriends, DashboardResources } from '../index';

import {
	DashboardContainer,
	GroupContainer,
	FriendContainer,
	ResourceContainer
} from './Dashboard.elements';

const Dashboard = ({ dashboardPaginate, updateFlag, setUpdateFlag }) => {
	return (
		<DashboardContainer>
			<GroupContainer>
				<DashboardGroups dashboardPaginate={dashboardPaginate} />
			</GroupContainer>
			<FriendContainer>
				<DashboardFriends />
			</FriendContainer>
			<ResourceContainer>
				<DashboardResources
					dashboardPaginate={dashboardPaginate}
					updateFlag={updateFlag}
					setUpdateFlag={setUpdateFlag}
				/>
			</ResourceContainer>
		</DashboardContainer>
	);
};

export default Dashboard;
