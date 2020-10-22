import styled from 'styled-components';

import { Container, Button, colors } from '../../styles';

const { primary, secondary, lightGrey } = colors;

export const NavContainer = styled(Container)`
  /* max-width: 150rem; */
  height: 8rem;
  top:0;
  left:0;
  right:0;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
	border-bottom: 1px solid ${lightGrey};

  svg{
    width: 5rem;
    color: green;
  }
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;

	span {
		font-size: 3rem;
		margin-left: 1rem;
		color: white;
	}
`;

export const Links = styled.div`
	height: 100%;
	display: flex;
	align-items: center;

	a {
		margin: 1rem;

		&:hover {
			border-bottom: 1px solid white;
		}
	}
`;
