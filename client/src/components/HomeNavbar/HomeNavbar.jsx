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
						<NavLink>Overview</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Tour</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Docs</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Resources</NavLink>
					</NavItem>
				</LinkContainer>
				<LinkContainer>
					<NavItem>
						<NavLink>Log In</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Sign Up</NavLink>
					</NavItem>
				</LinkContainer>
			</NavContainer>
		</Nav>
	);
};

export default HomeNavbar;
