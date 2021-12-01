import styled from "styled-components";
import { colors } from "../../styles";

const { white, primary, secondary } = colors;

//45
export const QuillContainer = styled.div`
  position: absolute;
  right: 5%;
  left: 5%;
  top: 25%;

  overflow-y: auto;
`;

export const PlusContainer = styled.div`
  position: absolute;
  right: 90%;
  left: 85%;
  top: 85%;

  button {
    background-color: rgba(217, 25, 24, 0);
    border: 0;

    svg {
      font-size: 5rem;
      color: rgba(255, 255, 255, 1);
      &:hover {
        color: ${secondary};
      }
    }

    &:hover {
      background-color: rgba(217, 25, 24, 0);
      border: 0;
    }
  }
`;

export const BodyContainer = styled.div`
  min-height: 65vh;
  width: 90%;
  padding: 3rem;
  margin: 0 auto;
  margin-bottom: 5rem;
  background-color: 
  border-top: solid ${primary} 10px;
  border-radius: 5px;
  overflow-y: auto;

  h1 {
    color: ${white};
  }

  
`;

export const HeaderText = styled.h1`
  position: absolute;
  right: 50%;
  left: 5%;
  top: 5%;
  font-size: 3rem;
`;

export const FormContainer = styled.div`
  position: absolute;
  right: 5%;
  left: 5%;
  top: 10%;
`;

export const CreateContainer = styled.div`
  position: absolute;
  right: 5%;
  left: 5%;
  top: 87%;

  button {
    border-color: ${primary};
  }
`;
