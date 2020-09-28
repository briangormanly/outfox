import React, { useState } from 'react';

import GoogleLogo from '../../assets/google-icon.svg';
import FacebookLogo from '../../assets/facebook-icon.svg';
import MicrosoftLogo from '../../assets/microsoft-5.svg';

import {
	SignUpSection,
	SignUpContainer,
	HeaderContainer,
	HeaderText,
	HeaderLogo,
	ButtonGroup,
	AuthButton,
	LogoWrapper,
	LogoImg,
	ButtonText,
	OrContainer,
	OrBorder,
	OrText
} from './SignUp.elements';

const SignUpComponent = () => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	return (
		<SignUpSection>
			<SignUpContainer>
				<HeaderContainer>
					<HeaderLogo />
					<HeaderText>Outfox</HeaderText>
				</HeaderContainer>
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
					<OrContainer>
						<OrBorder />
						<OrText>Or</OrText>
						<OrBorder />
					</OrContainer>
				</ButtonGroup>
			</SignUpContainer>
		</SignUpSection>
	);
};

export default SignUpComponent;
