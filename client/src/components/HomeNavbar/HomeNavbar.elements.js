import styled from 'styled-components';
import {
	colors,
	Container,
	Link,
	transition,
	SignInButton
} from '../../styles/globalStyles';
import { FaFirefoxBrowser } from 'react-icons/fa';

const { primary, white, primaryLight } = colors;

export const Nav = styled.nav`
	height: 8rem;
	z-index: 100;
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
  position: relative;
  align-items: center;
  height: 8rem;
  max-width: 1600px;
`;

export const NavContainer2 = styled(Container)`
  display: flex;
  position: relative;
  align-items: left;
  justify-content: space-between;
  height: 8rem;
  left: 375px;
`;

export const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 5rem;
		height: 5rem;
	}
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

	@media screen and (max-width: 900px) {
		display: none;
	}
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

export const MobileIcon = styled.div`
	height: 8rem;
	font-size: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 3rem;
	cursor: pointer;
	display: none;

	@media screen and (max-width: 900px) {
		display: flex;
	}
`;

export const MobileMenu = styled.ul`
	display: none;

	@media screen and (max-width: 900px) {
		z-index: 10;
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		background-color: ${white};
		top: 8rem;
		left: ${({ click }) => (click ? '0' : '-100%')};
		transition: ${transition};
	}
`;

export const MobileItem = styled.li`
	height: 50px;
	width: 100%;
	margin-top: 3rem;
	text-align: center;
`;

export const MobileNavLink = styled(Link)`
  font-size: 3rem;
  color: ${primary};
  display: block;

  &:hover{
    color:${primaryLight};
  }
`;

export const MobileButton = styled(SignInButton)`
  width: 80%;
  font-size: 3rem;
`;
