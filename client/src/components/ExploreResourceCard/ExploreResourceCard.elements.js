import styled from 'styled-components';

import { colors, ActionButton } from '../../styles';

const { primary, mediumGrey, darkGrey } = colors;

export const ExploreCard = styled.div`
	display: flex;
	justify-content: space-between;
	height: 8rem;
	border-bottom: 1px solid ${mediumGrey};
	margin-bottom: 1rem;
	padding: 1rem;
	width:60%;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	margin-left: 15px;
	width: 55% !important;
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
	width: 15% !important;
	h2 {
		font-size: 1.6rem;
	}

	p {
		font-size: 1.3rem;
		padding-top: 0.2rem;
	}
	li{
		font-size:1.2rem;
		padding-top: .2rem;
		background-color:rgba(245, 153, 39, 0.54) !important;
		border-radius: 10px;
		margin-top:3px;
		text-align:center;
	}
	
`;

export const ButtonGroup = styled.div`
	height: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20% !important;
	margin-right:15px;
	margin-left: 10px;
`;


export const Button = styled(ActionButton)`
  font-size: 1.6rem;
  padding: 1.3rem;
  width: 100%;
`;
