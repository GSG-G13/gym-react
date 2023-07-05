import { FormControl, Input, InputLabel } from '@mui/material';
import React from 'react';

const InputForm = ({
  children, setState, filedName, value,
}) => (
  <FormControl fullWidth>
    <InputLabel sx={{ fontSize: '12px' }} htmlFor="my-input">{children}</InputLabel>
    <Input value={value} onChange={(e) => setState(e, filedName)} id="my-input" aria-describedby="my-helper-text" />
  </FormControl>
);

export default InputForm;
