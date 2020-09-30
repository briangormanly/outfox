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
	Form
} from './SignUp.elements';

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
				<Form onSubmit={handleSubmit} autoComplete="off">
					<FormInput
						label="First Name"
						name="firstName"
						type="text"
						value={firstName}
						onChange={handleChange}
					/>
					<FormInput
						label="Last Name"
						name="lastName"
						type="text"
						value={lastName}
						onChange={handleChange}
					/>
					<FormInput
						label="Email"
						name="email"
						type="email"
						value={email}
						onChange={handleChange}
					/>
					<FormInput
						label="Password"
						name="password"
						type="text"
						value={password}
						onChange={handleChange}
					/>
					<FormInput
						label="Confirm Password"
						name="confirmPassword"
						type="text"
						value={confirmPassword}
						onChange={handleChange}
					/>
				</Form>
			</SignUpContainer>
		</SignUpSection>
	);
};

export default SignUpComponent;
