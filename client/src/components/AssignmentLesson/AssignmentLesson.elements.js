import styled from "styled-components";

import { colors } from "../../styles";

const { primary, secondary, white } = colors;

export const AssignmentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    margin-top: 5rem;
    margin-bottom: 5rem;
    margin-right: 6rem;
    align-self: flex-end;
    font-family: inherit;
    font-size: 1.6rem;
    padding: 0.7rem 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    background-color: ${secondary};
    border: 1px solid ${secondary};
    border-radius: 5px;
    color: ${white};

    &:hover {
      color: ${secondary};
      background-color: ${white};
      border: 1px solid ${secondary};
    }

    span {
      display: inline-block;
      margin-right: 1rem;
      min-width: 5rem;
    }
  }
`;