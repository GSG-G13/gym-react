import { FormControl, Input, InputLabel } from '@mui/material';
import React from 'react';

const InputForm = ({ children }) => (
  <FormControl fullWidth>
    <InputLabel sx={{ fontSize: '12px' }} htmlFor="my-input">{children}</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
  </FormControl>
);

export default InputForm;
