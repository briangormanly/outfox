import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../../redux/actions/userActions';

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
	LoginMessage,
	ErrorMessage
} from './SignUp.elements';
import { Link } from '../../styles';
import { ReactComponent as Logo } from '../../assets/fox.svg';
import AuthButtons from '../AuthButtons/AuthButtons';
import FormInput from '../Form-Input/Form-Input';

const initialState = {
	userName : '',
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

	const { userName, password } = state;

	const storeDispatch = useDispatch();
	const { loading, error } = useSelector((state) => state.userAuth);

	const handleSubmit = async (e) => {
		e.preventDefault();
		storeDispatch(authAction({ username: userName, password: password }));
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
				{error && <ErrorMessage>Invalid Username or Password</ErrorMessage>}
				<Form onSubmit={handleSubmit}>
					<FormInput
						label="Username"
						name="userName"
						type="text"
						value={userName}
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
					<SignUpButton type="submit" disabled={loading}>
						Log in
					</SignUpButton>
				</Form>
				<LoginMessage>
					Dont have an Outfox account? <Link to="signup">Sign up</Link>
				</LoginMessage>
			</SignUpContainer>
		</SignUpSection>
	);
};

export default SignIn;
