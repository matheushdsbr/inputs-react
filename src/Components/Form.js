import React, { useState } from 'react';
import { FormGroup } from '../Styles/Form';
import Input from './Input';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <FormGroup>
        <Input type="text" id="nome" label="Nome" value={email} setValue={setEmail}/>
      </FormGroup>

      <FormGroup>
        <Input type="password" id="password" label="Password"value={password} setValue={setPassword} required/>
      </FormGroup>
    </>
  )
}

export default Form
