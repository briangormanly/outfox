import styled from "styled-components";

import { colors } from "../../styles";

const { white, primary, secondary } = colors;

export const AssignmentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    font-family: inherit;
    font-size: 1.6rem;
    padding: 0.7rem 1rem;
    display: flex;
    margin-left: 1rem;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    background-color: ${secondary};
    border: none;
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

export const TitleContainer = styled.div`
  min-height: 95vh;
  width: 90%;
  padding: 3rem;
  margin: 0 auto;
  margin-bottom: 5rem;
  background-color: ${primary};
  border-top: solid ${primary} 10px;
  border-radius: 5px;

  h1 {
    color: ${white};
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  padding: 3rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  min-height: 85vh;
  width: 100%;
  border-radius: 5px;
  padding: 2rem;
  background-color: ${white};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 4px 4px 4px 2px rgba(0, 0, 0, 0.25);

  svg {
    font-size: 10rem;
    color: rgba(229, 229, 229, 0.5);
  }
`;
