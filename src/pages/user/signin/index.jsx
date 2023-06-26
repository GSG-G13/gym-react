import { Box, Container } from '@mui/material';
import React from 'react';
import NavbarClient from '../../../components/navbar/NavbarClient';
import { Footer, SignInComp } from '../../../components';
import { ReactComponent as Login } from '../../../assets/login.svg';

const SignIn = () => (
  <Box>
    <NavbarClient />
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Login style={{ width: '50%' }} />

        <SignInComp />
      </Box>
    </Container>
    <Footer />
  </Box>
);

export default SignIn;
