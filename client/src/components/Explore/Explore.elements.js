import styled from 'styled-components';

import { colors, ActionButton } from '../../styles';

const { white } = colors;

export const ExploreContainer = styled.div`
	margin: 3rem 5rem;
	margin-left:-5rem;
	min-height: 90%;
	padding: 2rem;
	border-radius: 25px;
	background-color: ${white};
	-webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);

	display: flex;
	flex-direction: column;
	align-items: center;
	
	h1 {
		font-size: 3rem;
	}
`;

export const UserContainer = styled.div`
	max-width: 80rem;
	margin-top: 3rem;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const GroupContainer = styled.div`
	max-width: 80rem;
	margin-top: 3rem;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const HeadButtonGroup = styled.div`
	margin-top: 0rem;
	margin-left: 10rem;
`;

export const UserSelectBtn = styled(ActionButton)`
  font-size: 1.6rem;
  padding: 1.3rem;
  width: 15%;
  margin-left:16rem;
`;

export const GroupSelectBtn = styled(ActionButton)`
  font-size: 1.6rem;
  padding: 1.3rem;
  width: 15%;
  margin-left:10rem;
`;

export const ResSelectBtn = styled(ActionButton)`
  font-size: 1.6rem;
  padding: 1.3rem;
  width: 15%;
  margin-left:10rem;
`;