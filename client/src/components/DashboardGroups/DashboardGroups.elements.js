import styled from 'styled-components';

import { colors } from '../../styles';

const { primary, secondary, white } = colors;

export const GroupsContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const Header = styled.div`
	height: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ButtonContainer = styled.div`
	width: 35rem;
	/* background-color: pink; */
	display: flex;
	height: 100%;
	justify-content: flex-end;
	align-items: center;

	button {
		font-family: inherit;
		font-size: 1.6rem;
		padding: 0.7rem 1rem;
		display: flex;
		margin-left: 1rem;
		justify-content: space-around;
		align-items: center;
		cursor: pointer;
		background-color: ${secondary};
		border: none;
		border-radius: 5px;
		color: ${white};

		&:hover {
			color: ${secondary};
			background-color: ${white};
			border: 1px solid ${secondary};
		}

		span {
			display: inline-block;
			margin-right: 1rem;
			min-width: 5rem;
		}
	}
`;

export const CardContainer = styled.div`
	height: 100%;
	/* background-color: green; */
`;
