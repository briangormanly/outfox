import styled from 'styled-components';
import { motion } from 'framer-motion';

import { colors, Container, Link, Button } from '../../styles';

const { primary, secondary, secondaryLight, white, black } = colors;

export const HeroSection = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;
	background: rgb(139, 1, 1);
	background: linear-gradient(
		90deg,
		rgba(139, 1, 1, 1) 0%,
		rgba(158, 60, 60, 1) 40%,
		rgba(53, 157, 157, 1) 70%,
		rgba(18, 150, 150, 1) 100%
	);

	svg {
		position: absolute;
		bottom: 5rem;
	}

	.fill {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 5rem;
		background-color: #f4f4f4;
	}
`;

export const SVG = styled(motion.svg)`
  position: absolute;
  z-index: 2;
  right: 5rem;
  top: 15rem;
  width: 80rem;
`;

export const Content = styled(Container)`
	height: 100%;
	padding: 1rem;

	div {
    margin-top: 20rem;
		width: 60rem;
    color: white;
	h1 {
		font-size: 6rem;
	}

  p{
    margin-top: 3rem;
  }

	}
`;

export const HeroButton = styled(Button)`
  background-color: ${secondary};
  width: 20rem;
  margin-top: 3rem;

  &:hover{
    background-color: ${secondaryLight};
  }
`;
