import React from 'react';
import { useSelector } from 'react-redux';

import {
	SharedResourceContainer,
	SharedResourceList
} from './DashboardSharedR.elements';

import { ResourceCard } from '../index';

const DashboardSharedR = () => {
	const userDetail = useSelector((state) => state.userDetail);
	const { user } = userDetail;
	const { SharedResources } = user;

	return (
		<SharedResourceContainer>
			<h1>My Shared Resources</h1>
			<SharedResourceList>
				{SharedResources &&
					SharedResources.map((resource) => (
						<ResourceCard
							key={resource.ShareResourceId}
							{...resource.ResourceShared}
							sharedFrom={resource.SharedFrom}
							shareResourceId={resource.ShareResourceId}
							showType
							showDates
							showDescription
							shared
						/>
					))}
			</SharedResourceList>
		</SharedResourceContainer>
	);
};

export default DashboardSharedR;
