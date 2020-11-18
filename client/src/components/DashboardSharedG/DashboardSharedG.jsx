import React from 'react';
import { useSelector } from 'react-redux';

import {
	SharedResourceContainer,
	SharedResourceList
} from '../DashboardSharedR/DashboardSharedR.elements';

const DashboardSharedG = () => {
	const userDetail = useSelector((state) => state.userDetail);
	const { user } = userDetail;
	const { SharedGroups } = user;

	return (
		<SharedResourceContainer>
			<h1>My Shared Groups</h1>
			<SharedResourceList>
				{/* {SharedResources.map((resource) => (
        <ResourceCard
          key={resource.ShareResourceId}
          {...resource.ResourceShared}
          sharedFrom={resource.SharedFrom}
          showType
          showDates
          showDescription
          shared
        />
      ))} */}
			</SharedResourceList>
		</SharedResourceContainer>
	);
};

export default DashboardSharedG;
