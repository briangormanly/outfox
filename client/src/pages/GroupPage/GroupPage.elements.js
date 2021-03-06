import styled, { css } from 'styled-components';

import { colors, Link } from '../../styles';

const { primary, secondary, white } = colors;

export const GroupPageContainer = styled.div`
	width: 100%;
	min-height: 100%;
	/* background: rgb(139, 1, 1);
	background: linear-gradient(
		203deg,
		rgba(139, 1, 1, 1) 0%,
		rgba(158, 60, 60, 1) 35%,
		rgba(53, 157, 157, 1) 70%,
		rgba(18, 150, 150, 1) 100%
	); */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	/* max-width: 120rem; */
	width: 100%;
	padding: 3rem;
	margin: 0 auto;
`;

export const Content = styled.div`
	min-height: 85vh;
	width: 100%;
	border-radius: 25px;
	padding: 2rem;
	/* margin: 3rem; */
	background-color: ${white};
	display: flex;
	flex-direction: column;
	align-items: center;
	-webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);

	h1 {
		margin-top: 1rem;
		text-align: center;
		font-size: 2.6rem;
	}
	p {
		margin-top: 0.5rem;
		text-align: center;
	}
`;

export const ReturnLink = styled(Link)`
  color: ${secondary};
  font-size: 2rem;
  display: flex;
  align-items: center;
  align-self: flex-start;

  span{
    display: block;
    margin-left: 1rem;
  }
`;

export const ButtonContainer = styled.div`
	width: 70%;
	height: 3rem;
	display: flex;
	justify-content: space-around;
	margin-top: 1rem;
`;

export const Button = styled.button`
	border: none;
	border-radius: 25px;
	padding: 0 1rem;
	color: ${white};

	${(props) =>
		props.add &&
		css`
			background-color: green;

			&:hover {
				color: green;
				background-color: ${white};
				border: 1px solid green;
			}
		`};

	${(props) =>
		props.edit &&
		css`
			background-color: ${secondary};

			&:hover {
				color: ${secondary};
				background-color: ${white};
				border: 1px solid ${secondary};
			}
		`};

	${(props) =>
		props.delete &&
		css`
			background-color: ${primary};

			&:hover {
				color: ${primary};
				background-color: ${white};
				border: 1px solid ${primary};
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
`;

export const ResourceContainer = styled.div`
	margin-top: 3rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 100%;
	/*  */
`;
