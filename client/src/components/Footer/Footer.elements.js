import styled from 'styled-components';

import { colors, Container } from '../../styles/globalStyles';

const { primary, white } = colors;

export const FooterSection = styled.section`
	min-height: 30vh;
	background-color: ${primary};
	color: ${white};
`;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const FooterCardContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;

export const Trademark = styled.p`
	text-align: center;
	font-size: 1.3rem;
	padding-bottom: 1rem;
`;
