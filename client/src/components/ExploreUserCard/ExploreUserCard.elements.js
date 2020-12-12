import styled from 'styled-components';

import { colors, ActionButton } from '../../styles';

const { primary, primaryDark, mediumGrey, darkGrey } = colors;

export const ExploreCard = styled.div`
	display: flex;
	justify-content: space-between;
	height: 8rem;
	border-bottom: 1px solid ${mediumGrey};
	margin-bottom: 1rem;
	padding: 1rem;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
`;

export const IconContainer = styled.div`
	color: ${primary};
	border-radius: 50%;
	width: 6rem;
	background-color: ${mediumGrey};
	height: 6rem;
	margin-right: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 4rem;
		height: 4rem;
	}
`;

export const Text = styled.div`
	color: ${darkGrey};

	h2 {
		font-size: 1.6rem;
	}

	p {
		font-size: 1.3rem;
		padding-top: 0.2rem;
	}
`;

export const ButtonGroup = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 12rem;
`;

export const Button = styled(ActionButton)`
  font-size: 1.6rem;
  padding: 1.3rem;
  width: 100%;
`;
