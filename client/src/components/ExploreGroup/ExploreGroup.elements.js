import styled from 'styled-components';

import { colors, ActionButton } from '../../styles';

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

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 2.6rem;
	}
`;

export const ResourceContainer = styled.div`
	margin-top: 3rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 100%;
`;

export const Button = styled(ActionButton)`
  margin-top: 1rem;
`;
