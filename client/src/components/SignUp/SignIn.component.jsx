import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAuthAction } from '../../redux/actions/userActions';
import { userAuth } from '../../services/auth';

//Use elements from SignUp elements
// TODO: Refactor naming conventions and create mode reusable components.
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
	LoginMessage
} from './SignUp.elements';
import { Link } from '../../styles';
import { ReactComponent as Logo } from '../../assets/fox.svg';
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

	const storeDispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await userAuth({
				username : email,
				password : password
			});
			console.log(response);
			// console.log(response.user);
			storeDispatch(userAuthAction(response.user));
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
