import React from 'react';
import { FaTimes } from 'react-icons/fa';

import {
	ModalContainer,
	BackDrop,
	ModalContent,
	ExitButtonContainer
} from './Modal.elements';

const Modal = ({ setShowModal, children }) => {
	return (
		<ModalContainer>
			<BackDrop onClick={() => setShowModal(false)} />
			<ModalContent>
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
