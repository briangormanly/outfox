import styled from "styled-components";

import { colors } from "../../styles";

const { primary } = colors;

export const Card = styled.div`
  height: 30rem;
  max-width: fit-content;

  padding: 1.5rem;
  color: black;
  border-radius: 25px;
  border: 2px solid ${primary};
  margin-right: 2rem;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    text-align: right;
    font-size: 1.2rem;
  }

  h2 {
    font-size: 2.6rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  p {
    font-size: 1.6rem;
    margin-top: 1.5rem;
  }

  /* button {
		display: block;
		margin-top: 2rem;
		margin-bottom: 5rem;
		background-color: ${primary};
		border-radius: 5px;
		border: none;
		color: white;
		padding: 0.7rem 1rem;
		transition: 0.2s;
		cursor: pointer;
		width: 100%;

		&:hover {
			transform: scale(1.1);
		}
	} */
`;
