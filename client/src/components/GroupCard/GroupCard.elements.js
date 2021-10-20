import styled from 'styled-components';

import { colors } from '../../styles';

const { primary, secondary, white } = colors;

export const Card = styled.div`
	height: 90%;
	width: 25rem;
	flex: 0 0 auto;
	align-self: flex-end;
	padding: 2rem;
	display: flex;
	flex-direction: column;

	background-color: ${white};
	border: 2px solid ${primary};
	border-radius: 16px;
	color: black;

	-webkit-box-shadow: -29px 6px 15px -10px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -29px 6px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: -29px 6px 15px -10px rgba(0, 0, 0, 0.75);

	transition: .2s;

	&:hover {
		transform: translateY(-1.5rem);
	}

	&:hover ~ div {
		transform: translateX(80px);
	}

	&:not(:first-child) {
		margin-left: -80px;
	}

	h2 {
		font-size: 2.5rem;
	}

	p {
		margin-top: 2rem;
		font-size: 1.6rem;
	}

	button {
		display: block;
		margin-top: auto;
		margin-bottom: 2rem;

		font-family: inherit;
		font-size: 1.6rem;
		padding: 0.7rem 1rem;
		cursor: pointer;
		background-color: ${secondary};
		border: none;
		border-radius: 5px;
		color: ${white};

		&:hover {
			transform: scale(1.1);
		}
	}
`;
