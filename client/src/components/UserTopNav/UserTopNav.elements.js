import styled from 'styled-components';

import { colors, transition, Link } from '../../styles';

const { white, primary } = colors;

export const TopNavContainer = styled.div`
	height: 100%;
	width: 100%;
	padding: 0 3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SearchField = styled.div`
	width: 40rem;
	height: 100%;
	display: flex;
	align-items: center;

	form {
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;

		input {
			display: block;
			font-size: 1.6rem;
			width: 100%;
			padding: 1rem 2rem;
			border: none;
			border-radius: 50px;
			outline: none;
		}

		button {
			position: absolute;
			right: 15px;
			background-color: ${white};
			border: none;
			color: ${primary};
			font-size: 2rem;
			cursor: pointer;
		}
	}
`;

export const LinkContainer = styled.div`
	height: 100%;
	width: 50rem;
	/* background-color: red; */
	display: flex;
	align-items: center;
	justify-content: flex-end;

	button {
		background: ${white};
		border: 1px solid ${primary};
		color: ${primary};
		font-size: 2rem;
		border-radius: 50%;
		margin-left: 2rem;
		width: 5rem;
		height: 5rem;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			background: ${primary};
			color: ${white};
		}
	}
`;
