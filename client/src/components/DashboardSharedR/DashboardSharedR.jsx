import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shareService from '../../services/sharing';

import {
	SharedResourceContainer,
	SharedResourceList
} from './DashboardSharedR.elements';

const DashboardSharedR = () => {
	const [ sharedResources, setSharedResources ] = useState([]);

	const params = useParams();

	useEffect(() => {
		let mounted = true;
		const request = async () => {
			const response = await shareService.getSharedResource(params.id);

			if (mounted) {
				setSharedResources(response);
			}
		};

		request();

		return () => (mounted = false);
	}, []);

	return (
		<SharedResourceContainer>
			<SharedResourceList>
				<h1>My Shared Resources</h1>
				{sharedResources &&
					sharedResources.map((resource) => {
						console.log(resource);
						const { ResourceShared } = resource;
						return (
							<div key={ResourceShared.id}>
								<h3>{ResourceShared.title}</h3>
								<h3>{ResourceShared.description}</h3>
								<h3>{ResourceShared.link}</h3>
							</div>
						);
					})}
			</SharedResourceList>
		</SharedResourceContainer>
	);
};

export default DashboardSharedR;
