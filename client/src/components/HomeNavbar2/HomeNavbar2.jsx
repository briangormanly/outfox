import React from 'react';

import { NavContainer, LogoContainer, Links } from './HomeNavbar2.elements';
import { Link } from '../../styles';
import { ReactComponent as Logo } from '../../assets/fox-unfilled.svg';

const HomeNavbar2 = () => {
	return (
		<NavContainer>
			<Link>
				<LogoContainer>
					<Logo />
					<span>Outfox</span>
				</LogoContainer>
			</Link>
			<Links>
				<Link>Features</Link>
				<Link>Tour</Link>
				<Link>Docs</Link>
			</Links>
			<Links>
				<Link>Log in</Link>
				<Link>Sign up</Link>
			</Links>
		</NavContainer>
	);
};

export default HomeNavbar2;
