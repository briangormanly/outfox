import styled from 'styled-components';

import { colors, transition } from '../../styles';

export const TopNavContainer = styled.div`
	height: 100%;
	width: 100%;
	padding: 0 3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SearchField = styled.div`
	width: 30rem;
	height: 100%;
	display: flex;
	align-items: center;
	position: relative;

	input {
		display: block;
		width: 100%;
		padding: 1rem 1rem;
		border: none;
		border-radius: 50px;
		outline: none;
	}

	button {
		position: absolute;
		right: 15px;
	}
`;
