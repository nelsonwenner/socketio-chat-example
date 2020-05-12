import React from 'react';

const CustomInput = ({classs, type, placeholder, value, name, onChange}) => (

  <input className={`${classs}`}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    name={name}
  />
)

export default CustomInput;