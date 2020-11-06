import styled, { css } from 'styled-components';
import { ReactComponent as FolderSVG } from '../../assets/empty-folder.svg';
import { colors } from '../../styles';

const { primary, secondary, mediumGrey, white } = colors;

export const FolderIcon = styled(FolderSVG)`
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-60%, -56%);
  height: 22rem;
  width: 22rem;
  fill: none;
	stroke: ${primary};
  stroke-width: 2;
  pointer-events: none;
`;

export const CardContainer = styled.div`
	position: relative;
	min-height: 15rem;
	min-width: 35rem;
	flex: 1 0 0;
	margin: 0 1rem;
	padding: 1rem;
	margin-bottom: 1rem;
	border: 1px solid ${mediumGrey};
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	z-index: 0;
	background-color: ${white};

	${(props) =>
		props.small &&
		css`
			min-width: 10rem;
			width: 17rem;
			flex: 0 0 auto;
			padding: 2rem 0;
			border: none;
			min-height: 5rem;
			height: 12rem;
			margin-bottom: 5rem;
		`};

	@media screen and (max-width: 500px) {
		min-width: 20rem;
	}
`;

export const Dates = styled.div`
	display: flex;
	justify-content: flex-end;

	span {
		display: block;
		font-size: 1.2rem;
		padding: 0;
		margin: 0;
		margin-left: 1rem;
		text-align: right;
		font-size: 1.2rem;
	}
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 1 0 0;

	@media screen and (max-width: 500px) {
		flex-direction: column;
	}
`;

export const ButtonContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	width: 8rem;
	margin-left: 1rem;

	@media screen and (max-width: 500px) {
		flex-direction: row;
		width: 100%;
	}

	button {
		margin-top: 1.5rem;

		@media screen and (max-width: 500px) {
			padding: 1rem 2rem;
			width: 10rem;
			margin-right: 2rem;
		}
	}
`;

export const Attributes = styled.div`
	min-width: 10rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	span {
		color: ${primary};
		font-weight: bolder;
		margin-right: 1rem;
		font-size: 1.4rem;
	}

	h2 {
		font-size: 1.8rem;
	}

	p {
		text-align: left;
		font-size: 1.4rem;
		margin: 0;

		a {
			display: flex;
			align-items: center;

			color: ${secondary};
			span {
				color: ${secondary};
			}
		}
	}

	${(props) =>
		props.showSVG &&
		css`
			h2 {
				margin-top: 2rem;
				font-size: 1.4rem;
			}
		`};
`;
