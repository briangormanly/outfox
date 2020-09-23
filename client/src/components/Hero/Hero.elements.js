import styled from 'styled-components';

import {
	Container,
	colors,
	transition,
	SignInButton
} from '../../styles/globalStyles';

const { lightGrey, primary, black } = colors;

export const HeroSection = styled.section`
	height: 80vh;
	background-color: ${lightGrey};
`;

export const HeroContainer = styled(Container)`
  display:flex;
  height: 100%;
  /* background-color: pink; */
`;

export const HeroRow = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const HeroColumn = styled.div`
	min-width: 30rem;
	height: 100%;
	flex: 1 0 0;
	/* background-color: lightblue; */
	/* border: 1px solid black; */
	position: relative;
`;

export const ImgWrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: image('../../assets/online_connection.svg') center center/cover;
`;

export const Img = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

export const HeroHeader = styled.h1`
	font-size: 6rem;
	color: ${primary};
	margin-top: 10rem;
`;

export const HeroDescription = styled.p`
	font-size: 2rem;
	color: ${black};
	margin-top: 2.5rem;
	max-width: 45rem;
	line-height: 1.5;
`;

export const HeroButton = styled(SignInButton)`
  text-align: center;
  width: 30rem;
  font-size: 2rem;
  padding: 2rem 0;
  margin-top: 2.5rem;
`;
