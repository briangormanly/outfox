import React, { useReducer } from 'react';

//Use elements from SignUp elements
// TODO: Refactor naming conventions and create mode reusable components.
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
import AuthButtons from '../AuthButtons/AuthButtons';
import FormInput from '../Form-Input/Form-Input';

const initialState = {
	email    : '',
	password : ''
};

function reducer(state, { field, value }) {
	return {
		...state,
		[field] : value
	};
}

const SignIn = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	const { email, password } = state;

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
					<FormInput label="Email" name="email" type="email" value={email} onChange={handleChange} required />
					<FormInput
						label="Password"
						name="password"
						type="password"
						value={password}
						onChange={handleChange}
						required
					/>
					<SignUpButton type="submit">Log in</SignUpButton>
				</Form>
				<LoginMessage>
					Dont have an Outfox account? <Link to="signup">Sign up</Link>
				</LoginMessage>
			</SignUpContainer>
		</SignUpSection>
	);
};

export default SignIn;
