import styled from 'styled-components';

import { colors } from '../../styles/globalStyles';

const { primary } = colors;

export const Card = styled.div`
	width: 23rem;
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-bottom: 3rem;
	padding: 0 1rem;

	@media screen and (max-width: 1020px) {
		width: 32rem;
	}
`;

export const IconWrapper = styled.div`
	height: 6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 6rem;
	color: ${primary};
`;

export const Header = styled.h4`
	font-size: 2.5rem;
	margin-top: 2rem;
`;

export const Description = styled.p`margin-top: 2rem;`;
