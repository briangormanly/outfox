import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { ModalContainer, BackDrop, ModalContent } from './Modal.elements';

const Modal = ({ showModal, setShowModal, children }) => {
	return (
		<ModalContainer>
			<BackDrop onClick={() => setShowModal(false)} />
			<ModalContent>
				<div>
					<button onClick={() => setShowModal(false)}>
						<FaTimes />
					</button>
				</div>
				{children}
			</ModalContent>
		</ModalContainer>
	);
};

export default Modal;
