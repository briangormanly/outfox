import React, { useState } from 'react';

import AuthButtons from '../AuthButtons/AuthButtons';

import {
	SignUpSection,
	SignUpContainer,
	HeaderContainer,
	HeaderText,
	HeaderLogo,
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
				<AuthButtons />
				<OrContainer>
					<OrBorder />
					<OrText>Or</OrText>
					<OrBorder />
				</OrContainer>
			</SignUpContainer>
		</SignUpSection>
	);
};

export default SignUpComponent;
