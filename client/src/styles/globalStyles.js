import styled, { createGlobalStyle, css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { FaFirefoxBrowser } from 'react-icons/fa';

export const GlobalStyles = createGlobalStyle`
  html{
    font-size: 62.5%;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Roboto', sans-serif;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration:none;
    color: inherit;
  }

  p{
    font-size: 1.7rem;
    line-height: 1.5;
  }

  button{
    cursor: pointer;
  }
`;

export const colors = {
	primary        : '#87847a',
	primaryLight   : '#ebe8e1',
	primaryDark    : '#5c584d',
	secondary      : '#129696',
	secondaryLight : '#2ed1d1',
	secondaryDark  : '',
	black          : '#000',
	white          : '#fff',
	lightGrey      : '#f4f4f4',
	darkGrey       : '#333333',
	mediumGrey     : '#dedede'
};

export const transition = 'all 0.3s ease-out';

export const Container = styled.div`
	max-width: 1300px;
	margin: 0 auto;
	width: 100%;
	padding: 0 3rem;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  font-size: 1.6rem;
  /* color: ${colors.white}; */
  cursor: pointer;
  padding: 1rem;
  border: none;
  display: inline-block;
`;

export const SignInButton = styled(Link)`
  background-color: ${colors.primaryDark};
  color: ${colors.white};
  border-radius: 50px;

  &:hover{
    background-color: ${colors.white};
    color: ${colors.primaryDark};
    border: 1px solid ${colors.primaryDark};
  }
`;

export const Button = styled.button`
	border-radius: 4px;
	background: ${colors.primaryDark};
	white-space: nowrap;
	padding: 1rem 2rem;
	color: ${colors.white};
	font-size: 1.6rem;
	outline: none;
	border: none;
	cursor: pointer;
	transition: ${transition};
`;

export const ActionButton = styled.button`
	border: none;
	border-radius: 25px;
	padding: 1rem 1rem;
	color: ${colors.white};

	${(props) =>
		props.add &&
		css`
			background-color: green;

			&:hover {
				color: green;
				background-color: ${colors.white};
				border: 1px solid green;
			}
		`};

	${(props) =>
		props.edit &&
		css`
			background-color: ${colors.secondary};

			&:hover {
				color: ${colors.secondary};
				background-color: ${colors.white};
				border: 1px solid ${colors.secondary};
			}
		`};

	${(props) =>
		props.delete &&
		css`
			background-color: ${colors.primary};

			&:hover {
				color: ${colors.primary};
				background-color: ${colors.white};
				border: 1px solid ${colors.primary};
			}
		`};

	${(props) =>
		props.flex &&
		css`
			display: flex;
			align-items: center;

			span {
				padding-left: 0.5rem;
			}
		`};

	${(props) =>
		props.fullWidth &&
		css`
			display: block;
			width: 100%;
			margin-top: 3rem;
		`};
`;

export const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LogoIcon = styled(FaFirefoxBrowser)`
  font-size: 4.5rem;
`;

export const LogoText = styled.span`
	display: inline-block;
	font-size: 3rem;
	font-weight: bold;
	margin-left: 1rem;
`;
