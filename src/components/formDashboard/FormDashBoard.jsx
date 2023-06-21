import React from 'react';
import { Box, Typography } from '@mui/material';
import InputForm from './InputForm';
import GroupButtons from './GroupButtons';

const FormDashBoard = () => (
  <Box
    p="20px"
    sx={{
      display: 'flex', flexDirection: 'column', gap: 2, width: '675px ', border: '1px solid #ccc', backgroundColor: '#fff',
    }}
  >
    <Typography sx={{ color: '#000' }}>Add User</Typography>
    <InputForm>username</InputForm>
    <InputForm>email</InputForm>
    <InputForm>password</InputForm>
    <GroupButtons />
  </Box>

);

export default FormDashBoard;