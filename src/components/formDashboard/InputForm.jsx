/* eslint-disable no-nested-ternary */
import { FormControl, Input, InputLabel } from '@mui/material';
import React from 'react';

const InputForm = ({
  children, setState, filedName, value,
}) => (
  <FormControl fullWidth>
    <InputLabel
      sx={{
        fontSize: '12px',
        color: '#fff',
      }}
      htmlFor="my-input"
    >
      {children}

    </InputLabel>
    <Input
      type={filedName === 'password'
        ? 'password' : filedName === 'email'
          ? 'email' : 'text'}
      value={value}
      onChange={(e) => setState(e, filedName)}
      id="my-input"
      aria-describedby="my-helper-text"
      sx={{
        color: '#fff',
        fontSize: 13,

      }}
    />
  </FormControl>
);

export default InputForm;
