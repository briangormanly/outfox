import styled from 'styled-components';

import { colors, Button } from '../../styles/globalStyles';

const { lightGrey, black } = colors;

export const ButtonGroup = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
`;

export const AuthButton = styled(Button)`
  width: 100%;
  background-color: ${lightGrey};
  color: ${black};
  font-size: 1.4rem;
  text-align: left;
  box-shadow: 0 0 0.1rem 0 rgba(0,0,0,.12), 0 0.1rem 0.3rem 0 rgba(0,0,0,.24);
  margin-top: 1rem;

  &:hover{
    background-color: #bababa;
  }
`;

export const LogoWrapper = styled.span`
	display: block;
	height: 3rem;
	width: 100%;
	display: flex;
	align-items: center;
`;

export const LogoImg = styled.img`
	width: 2.4rem;
	height: 2.4rem;
	margin-right: 1rem;
`;

export const ButtonText = styled.div``;
