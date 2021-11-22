import styled from "styled-components";

import { colors } from "../../styles";

const { primary, secondary, white, black } = colors;

export const AssignmentContainer = styled.div`
  
  
  

  display: flex;
  flex-direction: column;
  justify-content: center;

  
  }
`;


export const AssignmentContainer1 = styled.div`
min-height: 3vh;
width: 100%;
padding: 2rem;
background-color: ${white};
border: 1px solid ${black};
display: flex;
flex-direction: column;
justify-content: center;
  
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
  background-color: ${white};
  display: flex;
  flex-direction: column;
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
    font-family: inherit;
    font-size: 1.6rem;
    padding: 0.7rem 1rem;
    display: flex;
    margin-left: 1rem;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    background-color: ${primary};
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

export const VerticalLine = styled.div`
  border: 2px solid rgba(229, 229, 229, 0.5);
  position: relative;
  transform: rotate(48deg);
  border-left: 2px solid ${white};
  top: 125px;
  height: 150px;
`;


export const ButtonContainer = styled.div`
    width: 35rem;

    display: flex;
    height: 100%;
    justify-content: flex-end;
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
        background-color: ${primary};
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
