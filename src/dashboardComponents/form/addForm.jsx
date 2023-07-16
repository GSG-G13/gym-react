/* eslint-disable no-nested-ternary */
import {
  Box, FormControl, Input, InputLabel, Typography,
} from '@mui/material';
import React from 'react';
import { AddButton, DeleteButton } from '../button';

const AddForm = ({
  setShowForm, showForm, axiosData, setState, head,
}) => (
  <Box mt={5}>
    <Typography color="#fff" textAlign="center">Add User</Typography>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
    }}
    >
      {head.map((inp) => (
        <FormControl key={inp}>
          <InputLabel sx={{ fontSize: 11, color: '#fff' }} htmlFor="my-input">{inp}</InputLabel>
          <Input
            type={inp === 'password'
              ? 'password' : inp === 'email'
                ? 'email' : 'text'}
            onChange={(e) => setState(e, inp)}
            sx={{ fontSize: 12, color: '#fff', borderBottom: '1px solid #ccc' }}
            id={inp}
            aria-describedby="my-helper-text"
          />
        </FormControl>
      ))}
    </Box>

    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      gap: 5,
      mt: 3,
    }}
    >
      <AddButton text="Submit" axiosData={axiosData} />
      <DeleteButton text="Cancel" setShowForm={setShowForm} showForm={showForm} />
    </Box>

  </Box>
);

export default AddForm;
