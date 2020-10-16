import React from 'react';

import { NavContainer, LogoContainer, Links } from './HomeNavbar2.elements';
import { Link } from '../../styles';
import { ReactComponent as Logo } from '../../assets/fox-unfilled.svg';

const HomeNavbar2 = () => {
	return (
		<NavContainer>
			<Link to="/">
				<LogoContainer>
					<Logo />
					<span>Outfox</span>
				</LogoContainer>
			</Link>
			<Links>
				<Link to="/">Features</Link>
				<Link to="/">Tour</Link>
				<Link to="/">Docs</Link>
			</Links>
			<Links>
				<Link to="/">Log in</Link>
				<Link to="/">Sign up</Link>
			</Links>
		</NavContainer>
	);
};

export default HomeNavbar2;
