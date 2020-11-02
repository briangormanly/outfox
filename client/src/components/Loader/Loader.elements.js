import styled from 'styled-components';

import { colors } from '../../styles';

const { mediumGrey, primary } = colors;

export const LoaderContainer = styled.div`
	position: relative;
	width: 100%;
	height: ${({ container }) => (container ? '100%' : '100vh')};
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		display: block;
		width: 15rem;
		height: 15rem;
		border: 1.3rem solid ${mediumGrey};
		border-top: 1.3rem solid ${primary};
		border-radius: 50%;
	}
`;
