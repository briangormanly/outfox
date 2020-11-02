import styled from 'styled-components';

import { Container, colors, SignInButton } from '../../styles/globalStyles';

const { lightGrey, primary, black } = colors;

export const HeroSection = styled.section`
	height: 85vh;
	background-color: ${lightGrey};
`;

export const HeroContainer = styled(Container)`
  display:flex;
  height: 100%;
`;

export const HeroRow = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const HeroColumn1 = styled.div`
	min-width: 30rem;
	height: 100%;
	flex: 1 0 0;

	@media screen and (max-width: 900px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		align-items: center;
		transform: translateY(-3.5rem);
	}
`;

export const HeroColumn2 = styled(HeroColumn1)`
    
  @media screen and (max-width: 900px){
    display:none;
  }
`;

export const ImgWrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Img = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

export const HeroHeader = styled.h1`
	font-size: 6rem;
	color: ${primary};
	margin-top: 10rem;

	@media screen and (max-width: 620px) {
		font-size: 4rem;
	}
`;

export const HeroDescription = styled.p`
	font-size: 2rem;
	color: ${black};
	margin-top: 3rem;
	max-width: 45rem;
	line-height: 1.5;

	@media screen and (max-width: 620px) {
		font-size: 1.6rem;
	}
`;

export const HeroButton = styled(SignInButton)`
  text-align: center;
  width: 30rem;
  font-size: 2rem;
  padding: 2rem 0;
  margin-top: 3rem;

  @media screen and (max-width: 620px) {
    font-size: 1.6rem;
    padding: 1.6rem;
    width: 20rem;
	}
`;
