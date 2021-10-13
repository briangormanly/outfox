import styled from "styled-components";

import { colors } from "../../styles";

const { secondary, white } = colors;

export const CreateAssignmentContainer = styled.div`
  width: 100%;

  p {
    margin-top: 3rem;
    color: ${white};
    padding-right: 3rem;
    width: 100%;
  }

  button {
    display: inline-block;
    margin-top: 3rem;
    height: 4rem;
    width: 100%;
    font-size: 1.6rem;
    border: none;
    background-color: ${secondary};
    color: ${white};
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: ${secondary};
      background-color: ${white};
      border: 1px solid ${secondary};
    }
  }
`;

export const SmallInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;
