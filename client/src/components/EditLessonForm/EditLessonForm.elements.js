import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../styles';

const {white, primary} = colors;


//45
export const QuillContainer = styled.div`

position: absolute;
  right: 5%;
  left: 5%;
  top: 25%;

overflow-y: auto

`;

export const PlusContainer = styled.div`

position: absolute;
  right: 90%;
  left: 85%;
  top: 75%;

  background-color: ${primary};

  color: ${primary};

  

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
