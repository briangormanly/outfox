import styled from 'styled-components';

import { colors } from '../../styles';

const { white } = colors;

export const HelpContainer = styled.div`
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
	align-items: center;

	h1 {
		font-size: 3rem;
	}
`;

export const SubtitleContainer = styled.div`
	max-width: 80rem;
	margin-top: 3rem;
	width: 100%;
	display: flex;
	flex-direction: column;

	h3 {
		font-size: 1.8rem;
		margin-bottom: 2rem;
	}
`;