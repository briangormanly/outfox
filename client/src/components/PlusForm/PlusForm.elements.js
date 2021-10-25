import styled, { css } from 'styled-components';
import { motion } from 'framer-motion'

import { colors } from '../../styles';

const { secondary, white, primary, primaryLight } = colors;

export const PopContainer = styled.div`

position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
 
`;



export const BodyContainer = styled.div`
  text-align: center;
  
  
  padding: 3rem;
  display: block;
  margin: auto;
  margin-bottom: 5rem;
  background-color: ${primary};
  border-top: solid ${primary} 10px;
  border-radius: 5px;
  

  h1 {
    color: ${white};
  }
`;

export const HeaderText = styled.h1`
position: absolute;
  right: 50%;
  left: 5%;
  top: 10%;
    font-size: 3rem;
    
`;

export const AddContainer = styled.div`

position: absolute;
  right: 5%;
  left: 5%;
  top: 70%;

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

export const ButtonsContainer = styled.div`



    width: 25rem;

    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;

    button {
        font-family: inherit;
        font-size: 1.6rem;
        padding: 0.7rem 8rem;
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
        }

        span {
            display: inline-block;
            margin-right: 1rem;
            min-width: 5rem;
        }
    }
`;