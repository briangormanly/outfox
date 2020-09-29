import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import {
	Nav,
	NavContainer,
	LogoContainer,
	LogoIcon,
	LogoText,
	LinkContainer,
	NavItem,
	NavLink,
	MobileMenu,
	MobileIcon,
	MobileItem,
	MobileNavLink,
	MobileButton
} from './HomeNavbar.elements';

const HomeNavbar = () => {
	const [ click, setClick ] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	return (
		<Nav>
			<NavContainer>
				<NavLink to="/">
					<LogoContainer>
						<LogoIcon />
						<LogoText>Outfox</LogoText>
					</LogoContainer>
				</NavLink>
				<LinkContainer>
					<NavItem>
						<NavLink to="/">Overview</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/">Tour</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/">Docs</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/">Resources</NavLink>
					</NavItem>
				</LinkContainer>
				<LinkContainer>
					<NavItem>
						<NavLink to="/signin">Log In</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/signup">Sign Up</NavLink>
					</NavItem>
				</LinkContainer>
				<MobileIcon onClick={handleClick}>
					{click ? <FaTimes /> : <FaBars />}
				</MobileIcon>
				<MobileMenu click={click} onClick={handleClick}>
					<MobileItem>
						<MobileNavLink to="/">Overview</MobileNavLink>
					</MobileItem>
					<MobileItem>
						<MobileNavLink to="/">Tour</MobileNavLink>
					</MobileItem>
					<MobileItem>
						<MobileNavLink to="/">Docs</MobileNavLink>
					</MobileItem>
					<MobileItem>
						<MobileNavLink to="/">Resources</MobileNavLink>
					</MobileItem>
					<MobileItem>
						<MobileButton to="/login">Log In</MobileButton>
					</MobileItem>
					<MobileItem>
						<MobileButton to="/signup">Sign Up</MobileButton>
					</MobileItem>
				</MobileMenu>
			</NavContainer>
		</Nav>
	);
};

export default HomeNavbar;
