import { FormControl, Input, InputLabel } from '@mui/material';
import React from 'react';

const SearchInpDash = () => (
  <FormControl sx={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#fff', flex: 0.8 }}>
    <InputLabel sx={{ fontSize: 12, color: '#fff' }} htmlFor="my-input">search</InputLabel>
    <Input
      sx={{
        fontSize: 15,
        color: '#fff',
        px: 2,
      }}
      id="my-input"
      aria-describedby="my-helper-text"
    />
  </FormControl>
);

export default SearchInpDash;
