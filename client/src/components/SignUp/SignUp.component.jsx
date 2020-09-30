import React, { useState } from 'react';

import AuthButtons from '../AuthButtons/AuthButtons';
import FormInput from '../Form-Input/Form-Input';

import {
	SignUpSection,
	SignUpContainer,
	HeaderContainer,
	HeaderText,
	HeaderLogo,
	OrContainer,
	OrBorder,
	OrText,
	Form
} from './SignUp.elements';

const SignUpComponent = () => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setFirstName(e.target.value);
	};

	console.log(firstName);

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
				<Form onSubmit={handleSubmit}>
					<div>
						<label>First Name</label>
						<input
							name="firstName"
							type="text"
							value={firstName}
							onChange={handleChange}
						/>
					</div>
					<FormInput
						label="First Name"
						name="firstName"
						type="text"
						value={firstName}
						onChange={handleChange}
					/>
				</Form>
			</SignUpContainer>
		</SignUpSection>
	);
};

export default SignUpComponent;
