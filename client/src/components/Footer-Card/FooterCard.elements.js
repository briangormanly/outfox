import styled from 'styled-components';

import { colors, Link } from '../../styles/globalStyles';

const { white } = colors;

export const Card = styled.div`
	width: 16rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 5rem;
	margin-bottom: 3rem;
`;

export const Header = styled.p`
	color: ${white};
	font-size: 1.8rem;
	font-weight: bold;
	letter-spacing: 0.2rem;

	@media screen and (max-width: 600px) {
		font-size: 1.4rem;
	}
`;

export const FooterLink = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  color: ${white};

  &:hover{
    color:${colors.primaryLight}
  }

  @media screen and (max-width: 600px){
    font-size: 1.2rem;
  }
`;
