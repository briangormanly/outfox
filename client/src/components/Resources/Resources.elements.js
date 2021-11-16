import styled from "styled-components";
import { colors } from "../../styles";
const { primary, secondary, white } = colors;

export const ResourceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CreateResourceButton = styled.button`
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
`;

export const ResourceCardContainer = styled.div`
  margin: 3rem 5rem;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 25px;

  background-color: ${primary};
  border-top: solid ${primary} 10px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);

  h1 {
    width: 100%;
    color: ${white};
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  padding: 3rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 2rem;
  background-color: ${white};

  box-shadow: inset 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
`;
