import styled, { createGlobalStyle } from 'styled-components';
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

`;

export const colors = {
	primary      : '#8B0101',
	primaryLight : '#D91818',
	primaryDark  : '#400000',
	black        : '#000',
	white        : '#fff',
	lightGrey    : '#f4f4f4',
	darkGrey     : '#333333',
	mediumGrey   : '#dedede'
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
  color: ${colors.white};
  cursor: pointer;
  padding: 1rem;
  border: none;
  display: inline-block;
`;

export const SignInButton = styled(Link)`
  background-color: ${colors.primary};
  color: ${colors.white};
  border-radius: 50px;

  &:hover{
    background-color: ${colors.white};
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
  }
`;

export const Button = styled.button`
	border-radius: 4px;
	background: ${colors.primary};
	white-space: nowrap;
	padding: 1rem 2rem;
	color: ${colors.white};
	font-size: 1.6rem;
	outline: none;
	border: none;
	cursor: pointer;
	transition: ${transition};
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
