import styled from 'styled-components';

import { colors } from '../../styles';

const { secondary } = colors;

export const FriendCard = styled.div`
	width: 100%;
	height: 7rem;
	display: flex;
	margin-top: 1rem;
`;

export const ImageContainer = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	img {
		height: 5rem;
		width: 5rem;
		border-radius: 50%;
	}

	svg {
		width: 7rem;
		height: 6rem;
		position: absolute;
		top: 50%;
		transform: translateY(-25%);
		fill: none;
		stroke: ${secondary};
		stroke-width: 8;
		stroke-linecap: round;
		pointer-events: none;
	}
`;

export const FriendContent = styled.div`
	width: 70%;
	height: 100%;
	padding-left: 1rem;
	margin-top: 1rem;

	h3 {
		margin-top: 0.5rem;
		font-size: 1.6rem;
	}

	p {
		font-size: 1.2rem;
	}
`;
