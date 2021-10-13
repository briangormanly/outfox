import React from "react";
import { FaTimes } from "react-icons/fa";

import {
  ModalContainer,
  BackDrop,
  ModalContent,
  ExitButtonContainer,
} from "./Modal.elements";

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};

const Modal = ({ setShowModal, children, large }) => {
  return (
    <ModalContainer>
      <BackDrop
        onClick={() => setShowModal(false)}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
      />
      <ModalContent
        large={large}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <ExitButtonContainer>
          <button onClick={() => setShowModal(false)}>
            <FaTimes />
          </button>
        </ExitButtonContainer>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
