import styled from 'styled-components';

import { colors } from '../../styles';

const { primary, white } = colors;

export const UserSideNavContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		margin-top: 3rem;
		width: 15rem;
	}
`;

export const WelcomeMessage = styled.div`
	text-align: center;
	margin: 2rem 0;

	p {
		font-size: 2.4rem;
	}

	span {
		display: block;
		margin-top: 1rem;
	}
`;

export const SideNavButton = styled.button`
	width: 100%;
	background-color: inherit;
	height: 5rem;
	border: none;
	font-size: 1.6rem;
	color: ${primary};
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	div {
		width: 12.5rem;
		display: flex;
		align-items: center;

		svg {
			height: 2.5rem;
			width: 2.5rem;
			margin: 0;
			margin-right: 2rem;
		}
	}

	&:hover {
		background: ${primary};
		color: ${white};
	}
`;

export const DashboardSettings = styled.div`
	height: 20rem;
	width: 100%;
	margin-top: auto;
	padding: 0 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		text-align: center;
	}

	button {
		background-color: ${white};
		border: 1px solid ${primary};
		border-radius: 25px;
		color: ${primary};
		width: 15rem;
		font-size: 1.6rem;
		margin-top: 1.5rem;
		padding: 1rem;
		cursor: pointer;

		&:hover {
			color: ${white};
			background-color: ${primary};
		}
	}
`;
