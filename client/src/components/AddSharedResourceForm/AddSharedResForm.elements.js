import styled from 'styled-components';

import { colors } from '../../styles';

const { white, secondary } = colors;

export const AddToContainer = styled.div``;

export const ButtonContainer = styled.div`
	padding-top: 3rem;
	display: flex;
	justify-content: space-around;

	button {
		padding: 0.5rem 2rem;
		border: none;
		border-radius: 5px;
		font-size: 1.5rem;
		background-color: ${secondary};
		color: ${white};
		letter-spacing: 0.15rem;
	}
`;

export const OptionHeaderText = styled.h2`
	padding: 3rem 0;
	text-align: center;
	font-size: 2rem;
`;

export const CheckBoxGroup = styled.div`
	max-width: 70%;
	margin: 1rem auto;
	padding: 1rem;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #333;

	label {
		font-size: 1.6rem;
	}

	input {
		display: block;
		margin-left: auto;
		cursor: pointer;
		height: 2rem;
		width: 2rem;
	}
`;
