import React, { useReducer } from 'react';
import { setUserAction } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';

import AuthButtons from '../AuthButtons/AuthButtons';
import FormInput from '../Form-Input/Form-Input';
import { ReactComponent as Logo } from '../../assets/fox.svg';

import {
	SignUpSection,
	SignUpContainer,
	HeaderContainer,
	HeaderText,
	OrContainer,
	OrBorder,
	OrText,
	Form,
	SignUpButton,
	LoginMessage,
	InputRow,
	InputItem
} from './SignUp.elements';

import { Link } from '../../styles';

import { userRequests } from '../../services';

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
	const reduxDispatch = useDispatch();

	const { firstName, lastName, email, password, confirmPassword } = state;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			console.log('Password must match');
			return;
		}

		try {
			const response = await userRequests.createUser({
				firstname : firstName,
				lastname  : lastName,
				email     : email,
				username  : email,
				hashpw    : password
			});
			// console.log(response);
			// console.log(response.user);
			reduxDispatch(setUserAction(response.user));
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleChange = (e) => {
		dispatch({ field: e.target.name, value: e.target.value });
	};

	return (
		<SignUpSection>
			<SignUpContainer>
				<HeaderContainer>
					<Logo />
					<HeaderText>Outfox</HeaderText>
				</HeaderContainer>
				<AuthButtons />
				<OrContainer>
					<OrBorder />
					<OrText>Or</OrText>
					<OrBorder />
				</OrContainer>
				<Form onSubmit={handleSubmit}>
					<InputRow>
						<InputItem>
							<FormInput
								label="First Name"
								name="firstName"
								type="text"
								value={firstName}
								onChange={handleChange}
								required
							/>
						</InputItem>
						<InputItem>
							<FormInput
								label="Last Name"
								name="lastName"
								type="text"
								value={lastName}
								onChange={handleChange}
								required
							/>
						</InputItem>
					</InputRow>
					<FormInput label="Email" name="email" type="email" value={email} onChange={handleChange} required />
					<InputRow>
						<InputItem>
							<FormInput
								label="Password"
								name="password"
								type="password"
								value={password}
								onChange={handleChange}
								required
							/>
						</InputItem>
						<InputItem>
							<FormInput
								label="Confirm Password"
								name="confirmPassword"
								type="password"
								value={confirmPassword}
								onChange={handleChange}
								required
							/>
						</InputItem>
					</InputRow>
					<SignUpButton type="submit">Create a free account</SignUpButton>
				</Form>
				<LoginMessage>
					Already have an Outfox account? <Link to="signin">Log in</Link>
				</LoginMessage>
			</SignUpContainer>
		</SignUpSection>
	);
};

export default SignUpComponent;
