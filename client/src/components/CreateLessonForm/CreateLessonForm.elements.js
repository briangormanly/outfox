import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../styles';

const { secondary, white, primary, primaryLight } = colors;

export const QuillContainer = styled.div`

position: absolute;
  right: 5%;
  left: 5%;
  top: 25%;

overflow-y: auto

`;

export const AssignContainer = styled.div`

position: absolute;
  right: 70%;
  left: 0%;
  top: 90%;

`;

export const PopContainer = styled.div`

position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  

  margin: auto;
 
`;



export const ResourceContainer = styled.div`

position: absolute;
  right: 70%;
  left: 0%;
  top: 0%;
  bottom: 80;

`;

export const FormContainer = styled.div`

position: absolute;
  right: 5%;
  left: 5%;
  top: 10%;

`;

export const PlusContainer = styled.div`

position: absolute;
  right: 90%;
  left: 90%;
  top: 85%;

  background-color: ${primary};

  color: ${primary};

`;

export const CreateContainer = styled.div`

position: absolute;
  right: 5%;
  left: 5%;
  top: 87%;

`;



export const BodyContainer = styled.div`
  min-height: 65vh;
  width: 90%;
  padding: 3rem;
  margin: 0 auto;
  margin-bottom: 5rem;
  background-color: ${primary};
  border-top: solid ${primary} 10px;
  border-radius: 5px;
  overflow-y: scroll;

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

export const ButtonGroup = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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

export const TypeButton = styled.button`
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.5rem;
    background-color: ${secondary};
    color: ${white};
    letter-spacing: 0.15rem;
`;

export const SelectResourceText = styled.h2`
    padding-top: 1rem;
    font-size: 1.6rem;
`;

export const TypeField = styled.div`
    margin-top: 2rem;
    font-size: 1.6rem;
    font color: ${white};
    
`;

export const ModalsContent = styled(motion.div)`

  
  position: absolute;
  right: 90%;
  left: 0%;
  top: 70%;
  transform: translate(-50%, -50%);
 
  padding: 0rem;
  background-color: ${primary};
  border-radius: 10px;
  display: block;
  flex-direction: column;
  z-index: 20;
  centered;
  margin: auto;
  text-align:center;

    ${(props) => props.large && css`max-width: 20rem;`}
`;

export const FileInput = styled.div`margin-top: 3rem;`;