import { Box, Container } from '@mui/material';
import React from 'react';
import { SignInComp } from '../../../components';
import { ReactComponent as Login } from '../../../assets/login.svg';

const SignIn = () => (
  <Box>
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Login style={{ width: '50%' }} />

        <SignInComp />
      </Box>
    </Container>
  </Box>
);

export default SignIn;
