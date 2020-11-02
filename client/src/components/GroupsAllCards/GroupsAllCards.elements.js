import styled from 'styled-components';

import { colors } from '../../styles';

const { primary, white } = colors;

export const GroupCard = styled.div`
	height: 35rem;
	width: 20rem;
	background: rgb(139, 1, 1);
	background: linear-gradient(
		170deg,
		rgba(139, 1, 1, 1) 0%,
		rgba(158, 60, 60, 1) 35%,
		rgba(53, 157, 157, 1) 70%,
		rgba(18, 150, 150, 1) 100%
	);
	padding: 1.5rem;
	color: ${white};
	border-radius: 25px;
	margin-right: 2rem;
	margin-top: 1rem;

	display: flex;
	flex-direction: column;

	div {
		text-align: right;
		font-size: 1.2rem;
	}

	h2 {
		font-size: 2.6rem;
		font-weight: bold;
		margin-top: 1rem;
	}

	p {
		font-size: 1.6rem;
		margin-top: 1.5rem;
	}

	button {
		display: block;
		margin-top: auto;
		margin-bottom: 3rem;
		background-color: ${primary};
		border-radius: 5px;
		border: none;
		color: white;
		padding: 0.7rem 1rem;
		transition: 0.2s;
		cursor: pointer;

		&:hover {
			transform: scale(1.1);
		}
	}
`;
