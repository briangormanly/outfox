import styled from 'styled-components';

import { colors, ActionButton } from '../../styles';

const { white } = colors;

export const ExploreUserContainer = styled.div`
	margin: 3rem 5rem;
	min-height: 90%;
	padding: 2rem;
	border-radius: 25px;
	background-color: ${white};
	-webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);

	display: flex;
	flex-direction: column;

	h1 {
		font-size: 2.4rem;
	}
`;

export const ButtonGroup = styled.div`
	display: flex;
	height: 5rem;
	margin-top: 2rem;
`;

export const Button = styled(ActionButton)`
  margin-right: 2rem;
  padding: 0.5rem 4rem;
  height: 3rem;
`;

export const Content = styled.div`
	margin-top: 1rem;

	h3 {
		font-size: 1.6rem;
	}
`;
