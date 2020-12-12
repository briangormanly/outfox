import styled from 'styled-components';

import { Container, colors } from '../../styles/globalStyles';

const { primary, white, darkGrey, primaryDark, primaryLight } = colors;

export const FeatureSection = styled.div`
	color: ${white};
	min-height: 60vh;
	width: 100%;
	background-color: ${primaryDark};
`;

export const FeaturesContainer = styled(Container)`
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Header = styled.h3`
	font-size: 4rem;
	margin-top: 7rem;
	color: ${white};
`;

export const SubHead = styled.p`
	font-size: 2.5rem;
	margin-top: 2rem;
	color: ${primaryLight};
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
