import styled from 'styled-components';

import { colors, Link } from '../../styles';

const { primary, secondary, white, black, lightGrey } = colors;

export const GroupPageContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	background: rgb(139, 1, 1);
	background: linear-gradient(
		203deg,
		rgba(139, 1, 1, 1) 0%,
		rgba(158, 60, 60, 1) 35%,
		rgba(53, 157, 157, 1) 70%,
		rgba(18, 150, 150, 1) 100%
	);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	height: 85vh;
	max-width: 60rem;
	width: 100%;
	border-radius: 25px;
	padding: 2rem;
	margin: 3rem;
	background-color: ${lightGrey};
	display: flex;
	flex-direction: column;

	h1 {
		margin-top: 1rem;
		text-align: center;
		font-size: 2.6rem;
	}
	p {
		text-align: center;
	}
`;

export const ReturnLink = styled(Link)`
  color: ${secondary};
  font-size: 2rem;
  display: flex;
  align-items: center;

  span{
    display: block;
    margin-left: 1rem;
  }
`;
