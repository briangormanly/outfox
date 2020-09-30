import React from 'react';

import { InputGroup } from './Form-Input.elements';

const FormInput = ({ type, name, value, onChange, label }) => (
	<InputGroup>
		<label>{label}</label>
		<input name={name} type={type} value={value} onChange={onChange} />
	</InputGroup>
);

export default FormInput;
