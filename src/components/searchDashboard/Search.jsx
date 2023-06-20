import { FormControl, FormHelperText, Input } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Search = () => (
  <Box>
    <FormControl>
      <Input id="my-input" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </FormControl>
  </Box>
);

export default Search;
