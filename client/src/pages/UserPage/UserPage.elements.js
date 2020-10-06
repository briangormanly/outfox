import styled from 'styled-components';

import { colors } from '../../styles';

const { primaryLight, primaryDark, primary, lightGrey } = colors;

export const UserPageContainer = styled.div`
	height: 100vh;
	width: 100%;
	background-color: ${lightGrey};
	display: grid;
	grid-template-columns: 30rem auto auto;
	grid-template-rows: 8rem auto auto auto;
	grid-template-areas: 'sideNav topNav topNav' 'sideNav content content'
		'sideNav content content' 'sideNav content content';
`;

export const TopNavArea = styled.div`
	grid-area: topNav;
	background-color: ${lightGrey};
`;

export const SideNavArea = styled.div`
	grid-area: sideNav;
	background-color: red;
`;

export const ContentArea = styled.div`
	grid-area: content;
	background-color: blue;
`;
