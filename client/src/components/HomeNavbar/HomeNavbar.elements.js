import styled from 'styled-components';
import { colors, Container } from '../../styles/globalStyles';
import { Link } from 'react-router-dom';

const { primary, white, black } = colors;

export const Nav = styled.nav`
	height: 8rem;
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${colors.primary};
	color: ${white};
`;

export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  max-width: 1600px;
`;
