import styled from 'styled-components';
import { colors, Container, Link, transition } from '../../styles/globalStyles';
import { FaFirefoxBrowser } from 'react-icons/fa';

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

export const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LogoIcon = styled(FaFirefoxBrowser)`
  font-size: 4.5rem;
`;

export const LogoText = styled.span`
	display: inline-block;
	font-size: 3rem;
	font-weight: bold;
	margin-left: 1rem;
`;

export const LinkContainer = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const NavItem = styled.li`
	height: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid transparent;
	transition: ${transition};

	&:hover {
		border-bottom: 1px solid ${white};
	}
`;

export const NavLink = styled(Link)`
  margin: 1rem;
`;
