import styled from 'styled-components';

import { Container, colors } from '../../styles/globalStyles';

const { primary, white, darkGrey, lightGrey, primaryDark, primaryLight } = colors;

export const AboutSection = styled.div`
	color: ${primary};
	min-height: 60vh;
    width: 100%;
    padding-left: 20rem;
    padding-right: 20rem;
    background-color: ${lightGrey};
    @media screen and (max-width: 920px) {
        font-size: 1.6rem;
        padding-left: 12rem;
        padding-right: 12rem;
    }
    @media screen and (max-width: 720px) {
        font-size: 1.6rem;
        padding-left: 6rem;
        padding-right: 6rem;
    }
`;

export const FoxBanner = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
`;

export const AboutCentered = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
`;

export const AboutSubTitle = styled.div`
    font-size: 3rem;
    color: ${primaryDark};
    margin-top: 3rem;
    line-height: 1.5;
    text-align: center;
    @media screen and (max-width: 620px) {
        font-size: 1.6rem;
    }
`;

export const AboutQuote = styled.div`
    font-size: 2rem;
    color: ${darkGrey};
    margin-top: 3rem;
    line-height: 1.5;
    font-style: italic;
    text-align: center;
    padding-left: 6rem;
    padding-right: 6rem;
    @media screen and (max-width: 620px) {
        font-size: 1.6rem;
    }
`;

export const AboutText = styled.p`
    font-size: 1.5rem;
    margin-top: 2rem;
    color: ${primaryDark};
`;

export const AboutList = styled.ul`
    display: block;
    list-style-type: disc;
    margin-top: 1em;
    margin-bottom: 1 em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 40px;
    color: ${darkGrey};
`;

export const AboutListItem = styled.li`
    position: relative;
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

export const FeaturesContainer = styled(Container)`
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Header = styled.h3`
	font-size: 4rem;
	margin-top: 7rem;
	color: ${white};
`;

export const SubHead = styled.p`
	font-size: 2.5rem;
	margin-top: 2rem;
	color: ${primaryLight};
`;

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	margin-top: 4rem;

	@media screen and (max-width: 778px) {
		flex-direction: column;
		align-items: center;
	}
`;
