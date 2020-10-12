import styled from 'styled-components';

import { colors } from '../../styles';

const { secondary, white } = colors;

export const CreateGroupContainer = styled.div`
	width: 100%;
	height: 40rem;
	padding: 2rem;

	button {
		display: inline-block;
		margin-top: 3rem;
		height: 4rem;
		width: 100%;
		font-size: 1.6rem;
		border: none;
		background-color: ${secondary};
		color: ${white};
		border-radius: 5px;
		cursor: pointer;

		&:hover {
			color: ${secondary};
			background-color: ${white};
			border: 1px solid ${secondary};
		}
	}
`;
