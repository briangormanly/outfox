import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../styles';

const { secondary, white, primary, primaryLight } = colors;


//45

export const QuillContainer = styled.div`

position: absolute;
  right: 5%;
  left: 5%;
  top: 35%;

overflow-y: auto

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

`;

