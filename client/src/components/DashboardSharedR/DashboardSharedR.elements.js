import styled from 'styled-components';

export const SharedResourceContainer = styled.div`
	width: 100%;
	height: 30rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const SharedResourceList = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex: 1 0 auto;
	align-content: flex-start;
	flex-direction: column;
	margin-top: 4rem;

	div {
		margin-bottom: 3rem;
	}
`;
