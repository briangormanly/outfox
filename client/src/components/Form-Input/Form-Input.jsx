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
  min,
}) => (
  <InputGroup value={value} className={className}>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      min={min}
    />
    <label>{label}</label>
  </InputGroup>
);

export default FormInput;
