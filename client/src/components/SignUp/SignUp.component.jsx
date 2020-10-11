import React, { useReducer } from 'react';
import { createUserAction } from '../../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

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
	InputItem,
	ErrorMessage
} from './SignUp.elements';

import { Link } from '../../styles';

const initialState = {
	firstName       : '',
	lastName        : '',
	userName: '',
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
	const { firstName, lastName,userName, email, password, confirmPassword } = state;
	
	const storeDispatch = useDispatch();
	const {loading, error} = useSelector(state => state.userAuth)
	

	const handleSubmit = async (e) => {
		e.preventDefault();

		if(!firstName || !lastName || !email || !userName || !password){
			console.log('Please fill out all fields')
			return
		}

		if (password !== confirmPassword) {
			console.log('Password must match');
			return;
		}

		const firstNameCapitalized = firstName.charAt(0).toUpperCase() + firstName.toLowerCase().slice(1)

		const lastNameCapitalized = lastName.charAt(0).toUpperCase() + lastName.toLowerCase().slice(1)

		const newUserObject = {
					firstname : firstNameCapitalized,
					lastname  : lastNameCapitalized,
					email     : email,
					username  : userName,
					hashpw    : password
				}
		
		storeDispatch(createUserAction(newUserObject))
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
					{ error && <ErrorMessage>Username already exists</ErrorMessage>}
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
					<InputRow>
						<InputItem>
						<FormInput
								label="Username"
								name="userName"
								type="text"
								value={userName}
								onChange={handleChange}
								required
							/>
						</InputItem>
						<InputItem>
							<FormInput label="Email" name="email" type="email" value={email} onChange={handleChange} required />
						</InputItem>
					</InputRow>
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
					<SignUpButton type="submit" disabled={loading}>Create a free account</SignUpButton>
				</Form>
				<LoginMessage>
					Already have an Outfox account? <Link to="signin">Log in</Link>
				</LoginMessage>
			</SignUpContainer>
		</SignUpSection>
	);
};

export default SignUpComponent;
