import styled from 'styled-components';

import { colors } from '../../styles';

const { darkGrey, black } = colors;

export const InputGroup = styled.div`
	position: relative;
	width: 100%;
	margin-top: 3rem;
	height: 2rem;
	background-color: pink;

	input {
		display: block;
		width: 100%;
		height: 100%;
		padding: 1.5rem 1rem;
		font-size: 1.6rem;
		z-index: 2;
	}

	label {
		font-size: 1.6rem;
		position: absolute;
		left: 5px;
		top: 0.7rem;
		color: ${darkGrey};
	}
`;
