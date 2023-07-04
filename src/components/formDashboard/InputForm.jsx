import { FormControl, Input, InputLabel } from '@mui/material';
import React from 'react';

const InputForm = ({ children, setState, value }) => (
  <FormControl fullWidth>
    <InputLabel sx={{ fontSize: '12px' }} htmlFor="my-input">{children}</InputLabel>
    <Input onChange={(e) => setState((e.target.value))} id="my-input" aria-describedby="my-helper-text" placeholder={value || 'a'} />
  </FormControl>
);

export default InputForm;
