import styled from 'styled-components';

import {
	SharedResourceContainer,
	SharedResourceList
} from '../DashboardSharedR/DashboardSharedR.elements';

export const SharedGroupContainer = styled(SharedResourceContainer)`
  height: 40rem;
`;

export const SharedGroupList = styled(SharedResourceList)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
