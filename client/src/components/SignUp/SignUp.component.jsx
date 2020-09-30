import React, { useReducer } from 'react';

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
	Form,
	SignUpButton,
	LoginMessage
} from './SignUp.elements';

import { Link } from '../../styles';

const initialState = {
	firstName       : '',
	lastName        : '',
	email           : '',
	password        : '',
	confirmPassword : ''
};

function reducer(state, { field, value }) {
	return {
		...state,
		[field] : value
	};
}

const SignUpComponent = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	const { firstName, lastName, email, password, confirmPassword } = state;

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		dispatch({ field: e.target.name, value: e.target.value });
	};

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
					<FormInput
						label="First Name"
						name="firstName"
						type="text"
						value={firstName}
						onChange={handleChange}
						required
					/>
					<FormInput
						label="Last Name"
						name="lastName"
						type="text"
						value={lastName}
						onChange={handleChange}
						required
					/>
					<FormInput
						label="Email"
						name="email"
						type="email"
						value={email}
						onChange={handleChange}
						required
					/>
					<FormInput
						label="Password"
						name="password"
						type="password"
						value={password}
						onChange={handleChange}
						required
					/>
					<FormInput
						label="Confirm Password"
						name="confirmPassword"
						type="password"
						value={confirmPassword}
						onChange={handleChange}
						required
					/>
					<SignUpButton type="submit">Create a free account</SignUpButton>
				</Form>
				<LoginMessage>
					Already have an Outfox account? <Link to="login">Log in</Link>
				</LoginMessage>
			</SignUpContainer>
		</SignUpSection>
	);
};

export default SignUpComponent;
