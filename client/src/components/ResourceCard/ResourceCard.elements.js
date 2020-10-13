import styled from 'styled-components';

import { colors } from '../../styles';

const { primary, secondary, black, white } = colors;

export const CardContainer = styled.div`
	position: relative;
	height: 15rem;
	min-width: 35rem;
	flex: 1 0 0;
	margin: 0 1rem;
	padding: 0.5rem;
	margin-bottom: 1rem;
	border: 1px solid ${primary};
	border-radius: 5px;
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
