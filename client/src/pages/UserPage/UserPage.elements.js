import styled from 'styled-components';

import { colors } from '../../styles';

const { primary, lightGrey } = colors;

export const UserPageContainer = styled.div`
	min-height: 100vh;
	width: 100%;
	background-color: ${lightGrey};
	display: grid;
	grid-template-columns: 30rem 1fr 1fr;
	grid-template-rows: 8rem 1fr 1fr 1fr;
	grid-template-areas: 'sideNav topNav topNav' 'sideNav content content'
		'sideNav content content' 'sideNav content content';
`;

export const TopNavArea = styled.div`
	grid-area: topNav;
	/* border-bottom: 1px solid ${primary}; */
`;

export const SideNavArea = styled.div`
	grid-area: sideNav;
	border-right: 1px solid ${primary};
`;

export const ContentArea = styled.div`
	grid-area: content;
	/*  */
`;
