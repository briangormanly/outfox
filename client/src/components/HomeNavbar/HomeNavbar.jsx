import React from 'react';

import {
	Nav,
	NavContainer,
	LogoContainer,
	LogoIcon,
	LogoText,
	LinkContainer,
	NavItem,
	NavLink
} from './HomeNavbar.elements';

const HomeNavbar = () => {
	return (
		<Nav>
			<NavContainer>
				<LogoContainer>
					<LogoIcon />
					<LogoText>Outfox</LogoText>
				</LogoContainer>
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
						<NavLink to="/login">Log In</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/signup">Sign Up</NavLink>
					</NavItem>
				</LinkContainer>
			</NavContainer>
		</Nav>
	);
};

export default HomeNavbar;
