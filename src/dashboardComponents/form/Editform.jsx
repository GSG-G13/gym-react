import {
  Box, FormControl, Input, InputLabel, Typography,
} from '@mui/material';
import React from 'react';
import { DeleteButton, EditButton } from '../button';

const userInfo = ['username', 'email', 'password', 'age', 'gender', 'height', 'weight', 'goalweight'];
const EditForm = () => (
  <Box>
    <Typography textAlign="center">Edit User</Typography>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
    }}
    >
      {userInfo.map((inp) => (
        <FormControl>
          <InputLabel sx={{ fontSize: 12 }} htmlFor="my-input">{inp}</InputLabel>
          <Input sx={{ fontSize: 15 }} id="my-input" aria-describedby="my-helper-text" />
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
      <EditButton text="Add User" />
      <DeleteButton text="Cancel" />
    </Box>
  </Box>
);

export default EditForm;
