import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shareService from '../../services/sharing';

import {
	SharedResourceContainer,
	SharedResourceList
} from './DashboardSharedR.elements';

const DashboardSharedR = () => {
	return (
		<SharedResourceContainer>
			<SharedResourceList>
				<h1>My Shared Resources</h1>
			</SharedResourceList>
		</SharedResourceContainer>
	);
};

export default DashboardSharedR;
