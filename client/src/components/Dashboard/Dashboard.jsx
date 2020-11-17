import React from 'react';

import {
	DashboardGroups,
	DashboardFriends,
	DashboardResources,
	DashboardSharedResources
} from '../index';

import {
	DashboardContainer,
	GroupContainer,
	FriendContainer,
	ResourceContainer,
	SharedResourceContainer
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
			<SharedResourceContainer>
				<DashboardSharedResources />
			</SharedResourceContainer>
		</DashboardContainer>
	);
};

export default Dashboard;
