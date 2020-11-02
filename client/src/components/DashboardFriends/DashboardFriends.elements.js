import styled from 'styled-components';

import { colors } from '../../styles';

const { secondary, secondaryLight } = colors;

export const FriendsContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow-y: hidden;

	&::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background: ${secondary};
		border-radius: 10px;
	}
	&::-webkit-scrollbar-track {
		background: ${secondaryLight};
	}
`;
