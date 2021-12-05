import styled from "styled-components";

import { colors } from "../../styles";

const { primary, secondary, white, black } = colors;

export const ResourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AddResourceButton = styled.button`
  width: 100%;
`;

export const SelectResourceContainer = styled.div`
  min-height: 3vh;
  width: 100%;
  padding: 2rem;
  background-color: ${white};
  border: 1px solid ${black};
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    &:hover {
      color: ${secondary};
      background-color: ${white};
      border: 1px solid ${secondary};
    }
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  min-height: 55vh;
  width: 100%;
  border-radius: 5px;
  padding: 2rem;
  background-color: ${primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 10rem;
    color: rgba(229, 229, 229, 0.5);
  }

  p {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  button {
    font-family: inherit;
    font-size: 1.6rem;
    padding: 0.7rem 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
`;

export const VerticalLine = styled.div`
  border: 2px solid rgba(229, 229, 229, 0.5);
  position: relative;
  transform: rotate(48deg);
  border-left: 2px solid ${white};
  top: 125px;
  height: 150px;
`;

export const SelectButtonContainer = styled.div`
  width: 35rem;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  button {
    background-color: ${primary};
    color: ${white};

    &:hover {
      color: ${primary};
      background-color: ${white};
      border: 1px solid ${primary};
    }
  }
`;

export const NoResourcesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${primary};
  color: rgba(255, 255, 255, 1);

  svg {
    color: rgba(255, 255, 255, 1);
  }

  button {
    background-color: ${secondary};
    border: 1px solid ${secondary};
    &:hover {
      color: ${secondary};
      background-color: ${white};
      border: 1px solid ${secondary};
    }
  }
`;
