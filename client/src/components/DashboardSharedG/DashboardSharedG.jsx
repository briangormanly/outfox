import React from 'react';
import { useSelector } from 'react-redux';

import { SharedGroupContainer, SharedGroupList } from './DashboardSharedG.elements';

import { GroupAllCard } from '../index';

const DashboardSharedG = () => {
	const userDetail = useSelector((state) => state.userDetail);
	const { user } = userDetail;
	const { SharedGroups } = user;

	return (
		<SharedGroupContainer>
			<h1>My Shared Groups</h1>
			<SharedGroupList>
				{SharedGroups &&
					SharedGroups.map((group) => (
						<GroupAllCard
							key={group.SharedID}
							{...group.GroupShared}
							sharedFrom={group.SharedFrom}
							shared
						/>
					))}
			</SharedGroupList>
		</SharedGroupContainer>
	);
};

export default DashboardSharedG;
