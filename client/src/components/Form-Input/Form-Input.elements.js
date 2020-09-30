import styled, { css } from 'styled-components';

import { colors, transition } from '../../styles';

const { darkGrey, black, mediumGrey } = colors;

export const InputGroup = styled.div`
	position: relative;
	width: 100%;
	margin-top: 3rem;
	height: 3.4rem;

	input {
		display: block;
		width: 100%;
		height: 100%;
		padding: 1.4rem 1rem;
		font-size: 1.6rem;
		z-index: 2;
		border-color: rgba(0, 0, 0, .12);
		border-radius: 5px;

		&:focus ~ label {
			color: ${black};
			transform: translateY(-30px) translateX(-10px) scale(0.8);
		}
	}

	label {
		font-size: 1.5rem;
		position: absolute;
		left: 8px;
		top: 0.7rem;
		color: ${darkGrey};
		pointer-events: none;
		transition: ${transition};

		${({ value }) =>
			value &&
			css`
				transform: translateY(-30px) translateX(-10px) scale(0.8);
				color: ${black};
			`};
	}
`;
