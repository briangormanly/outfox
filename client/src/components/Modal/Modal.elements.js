import styled from 'styled-components';
import { motion } from 'framer-motion';

import { colors } from '../../styles';

const { primary, secondary, lightGrey, white } = colors;

export const ModalContainer = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	height: 100vh;
	width: 100vw;
`;

export const BackDrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  z-index: 3;
`;

export const ModalContent = styled(motion.div)`
  position: absolute;
  z-index: 5;
  right: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 35rem;
  max-width: 40rem;
  width: 100%;
  background-color: ${white};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
`;

export const ExitButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;

	button {
		margin-top: 2rem;
		margin-right: 2rem;
		height: 3rem;
		width: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.6rem;
		border: none;
		background-color: ${secondary};
		color: ${white};
		border-radius: 5px;
		cursor: pointer;

		&:hover {
			color: ${secondary};
			background-color: ${white};
			border: 1px solid ${secondary};
		}
	}
`;
