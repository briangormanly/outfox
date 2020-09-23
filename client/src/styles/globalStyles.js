import styled, { createGlobalStyle } from 'styled-components';

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
    text-decoration:none
  }

`;

export const colors = {
	primary      : '#8B0101',
	primaryLight : '#D91818',
	primaryDark  : '#400000',
	black        : '#000',
	white        : '#fff',
	lightGrey    : '#f4f4f4',
	darkGrey     : '#a9a9a9'
};

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	width: 100%;
	padding: 0 3rem;
`;
