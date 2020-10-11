import React from 'react';
import { motion } from 'framer-motion';

import { LoaderContainer } from './Loader.elements';

const Loader = ({ container }) => {
	console.log(container);
	return (
		<LoaderContainer container={container}>
			<motion.span
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
			/>
		</LoaderContainer>
	);
};

export default Loader;
