import styled from "styled-components";

import { colors } from "../../styles";

const { primary, secondary, white } = colors;

export const GroupContainer = styled.div`
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
  }
`;

export const TitleContainer = styled.div`
  min-height: 65vh;
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
  min-height: 55vh;
  width: 100%;
  border-radius: 5px;
  padding: 2rem;
  background-color: ${white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: inset 4px 4px 4px 2px rgba(0, 0, 0, 0.25);

  svg {
    font-size: 10rem;
    color: rgba(229, 229, 229, 0.5);
  }

  p {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  button {
    margin-top: 0;
    margin-right: 0;
    align-self: center;
  }
`;
