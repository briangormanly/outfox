import styled from 'styled-components';

import {
	colors,
	Container,
	LogoContainer,
	LogoIcon,
	LogoText,
	Button
} from '../../styles/globalStyles';

const { primary, lightGrey, black, primaryLight, darkGrey } = colors;

export const SignUpSection = styled.section`
	height: 100vh;
	background-color: ${lightGrey};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const SignUpContainer = styled(Container)`
  /* height: 80rem; */
  max-width: 42rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: pink; */
`;

export const HeaderContainer = styled(LogoContainer)`
  width: 25rem;
  height: 5.5rem;
  color: ${primary};
`;

export const HeaderLogo = styled(LogoIcon)`
  font-size: 5rem;   

`;

export const HeaderText = styled(LogoText)`
  font-size: 5rem;
`;

export const OrContainer = styled.div`
	width: 100%;
	margin-top: 3rem;
	display: flex;
`;

export const OrBorder = styled.div`
	height: 2px;
	flex: 1 0 0;
	background-color: ${darkGrey};
	transform: translateY(2.1rem);
`;

export const OrText = styled.p`
	padding: 1rem;
	color: ${darkGrey};
	text-align: center;
`;

export const Form = styled.form`width: 100%;`;
