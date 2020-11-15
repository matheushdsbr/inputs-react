import React from 'react';
import { InputForm, LabelForm } from '../Styles/Input';


const Input = ({ id, label, value, setValue, type }) => {
  return (
    <>
      <InputForm
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={({ target }) => setValue(target.value)} required/>
      <LabelForm htmlFor={id}>{label}</LabelForm>
    </>
  )
}

export default Input
