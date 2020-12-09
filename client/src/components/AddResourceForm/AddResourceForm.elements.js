import styled from 'styled-components';

import { colors } from '../../styles';

const { secondary, white } = colors;

export const HeaderText = styled.h1`font-size: 3rem;`;

export const ButtonGroup = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export const TypeButton = styled.button`
	padding: 0.5rem 2rem;
	border: none;
	border-radius: 5px;
	font-size: 1.5rem;
	background-color: ${secondary};
	color: ${white};
	letter-spacing: 0.15rem;
`;

export const SelectResourceText = styled.h2`
	padding-top: 1rem;
	font-size: 1.6rem;
`;

export const TypeField = styled.div`
	margin-top: 2rem;
	font-size: 1.6rem;
`;

export const FileInput = styled.div`margin-top: 3rem;`;
