import React from 'react';

import { InputGroup } from './Form-Input.elements';

const FormInput = ({ type, name, value, onChange, label }) => (
	<InputGroup value={value}>
		<input name={name} type={type} value={value} onChange={onChange} />
		<label>{label}</label>
	</InputGroup>
);

export default FormInput;
