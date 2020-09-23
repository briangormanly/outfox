import styled from 'styled-components';

import { colors, Container } from '../../styles/globalStyles';

const { primary, lightGrey, black } = colors;

export const InfoSec = styled.section`
	height: 70vh;
	width: 100%;
	background-color: ${lightGrey};
	margin-top: 3rem;
`;

export const InfoContainer = styled(Container)`
  display:flex;
  height: 100%;
`;

export const InfoRow = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const Column1 = styled.div`
	min-width: 30rem;
	height: 100%;
	flex: 1 0 0;

	@media screen and (max-width: 816px) {
		display: none;
	}
`;

export const Column2 = styled(Column1)`
    display: flex;
    flex-direction: column;
    justify-content: center;
  @media screen and (max-width: 816px){
    align-items: center;
  }
`;

export const Header = styled.h3`
	font-size: 3em;
	margin-top: 5rem;
	color: ${primary};
	padding-left: 4rem;
`;

export const Description = styled.p`
	color: ${black};
	margin-top: 3rem;
	max-width: 45rem;
	line-height: 1.5;
	padding-left: 4rem;

	@media screen and (max-width: 620px) {
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
