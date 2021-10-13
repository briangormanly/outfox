import React from "react";

import { InputGroup } from "./Form-Input.elements";

const FormInput = ({
  type,
  name,
  value,
  onChange,
  label,
  className,
  disabled = false,
}) => (
  <InputGroup value={value} className={className}>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
    <label>{label}</label>
  </InputGroup>
);

export default FormInput;
