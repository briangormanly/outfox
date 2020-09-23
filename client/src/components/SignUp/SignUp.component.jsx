import React, { useState } from 'react';

import { SignUpSection } from './SignUp.elements';

const SignUpComponent = () => {
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	return (
		<SignUpSection>
			<div>hello</div>
		</SignUpSection>
	);
};

export default SignUpComponent;
