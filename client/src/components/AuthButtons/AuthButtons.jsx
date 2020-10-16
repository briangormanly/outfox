import React from 'react';

import GoogleLogo from '../../assets/google-icon.svg';
import FacebookLogo from '../../assets/facebook-icon.svg';
import MicrosoftLogo from '../../assets/microsoft-5.svg';

import {
	AuthButton,
	ButtonGroup,
	LogoImg,
	LogoWrapper,
	ButtonText
} from './AuthButtons.elements';

const AuthButtons = () => (
	<ButtonGroup>
		<AuthButton>
			<LogoWrapper>
				<LogoImg src={GoogleLogo} />
				<ButtonText>Sign in with Google</ButtonText>
			</LogoWrapper>
		</AuthButton>
		<AuthButton>
			<LogoWrapper>
				<LogoImg src={MicrosoftLogo} />
				<ButtonText>Sign in with Microsoft</ButtonText>
			</LogoWrapper>
		</AuthButton>
		<AuthButton>
			<LogoWrapper>
				<LogoImg src={FacebookLogo} />
				<ButtonText>Sign in with Facebook</ButtonText>
			</LogoWrapper>
		</AuthButton>
	</ButtonGroup>
);

export default AuthButtons;
