import styled from 'styled-components';

import { colors } from '../../styles';

const { white } = colors;

export const ExploreGroupContainer = styled.div`
	margin: 3rem 5rem;
	min-height: 90%;
	padding: 2rem;
	border-radius: 25px;
	background-color: ${white};
	-webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
`;
