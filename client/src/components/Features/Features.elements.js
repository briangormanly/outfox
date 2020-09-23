import styled from 'styled-components';

import { Container, colors } from '../../styles/globalStyles';

const { primary, white, darkGrey } = colors;

export const FeatureSection = styled.div`
	min-height: 70vh;
	width: 100%;
	background-color: ${white};
`;

export const FeaturesContainer = styled(Container)`
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Header = styled.h3`
	font-size: 4rem;
	margin-top: 6rem;
	color: ${primary};
`;

export const SubHead = styled.p`
	font-size: 2.5rem;
	margin-top: 2rem;
	color: ${darkGrey};
`;

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	margin-top: 4rem;

	@media screen and (max-width: 778px) {
		flex-direction: column;
		align-items: center;
	}
`;
