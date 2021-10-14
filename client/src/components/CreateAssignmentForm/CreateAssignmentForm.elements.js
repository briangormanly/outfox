import styled from "styled-components";

import { colors } from "../../styles";

const { secondary, white } = colors;

export const CreateAssignmentContainer = styled.div`
  width: 100%;

  p {
    margin-top: 3rem;
    color: ${white};
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

export const DatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  p {
    width: initial;
    padding-right: 1rem;
  }
`;

export const GradeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  p {
    color: #965d5c;
  }
`;

export const ResourceContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: #757575;
    border: 1px solid #757575;
    font-size: 1rem;
    width: 50%;
    height: 2rem;

    &:hover {
      color: ${white};
      background-color: #989595;
      border: 1px solid #989595;
    }
  }

  p {
    font-size: 1rem;
    width: initial;
  }
`;
