import styled from 'styled-components';

import { colors } from '../../styles';

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
