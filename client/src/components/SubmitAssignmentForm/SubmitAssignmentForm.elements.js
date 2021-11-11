import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../styles";

const { secondary, white, primary } = colors;

export const QuillContainer = styled.div`
  position: absolute;
  right: 5%;
  left: 5%;
  top: 25%;
  max-width: 50rem;
  overflow-y: auto;
  .ql-snow * {
    background: ${white};
  }
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
  margin-top: 10rem;
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
  right: initial;
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

export const ModalsContent = styled(motion.div)`

  
  position: absolute;
  right: 90%;
  left: 0%;
  top: 70%;
  transform: translate(-50%, -50%);
  max-width: 20rem;
  width: 70%;
    padding: 0rem;
  background-color: ${primary};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
    z-index: 20;
  centered;

    ${(props) =>
      props.large &&
      css`
        max-width: 20rem;
      `}
`;
