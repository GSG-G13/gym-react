import { Box, Container } from '@mui/material';
import React from 'react';
import NavbarClient from '../../../components/navbar/NavbarClient';
import Footer from '../../../footer/Footer';
import { SignInComp } from '../../../components';

const SignIn = () => (
  <Box>
    <NavbarClient />
    <Container>
      <SignInComp />
    </Container>
    <Footer />
  </Box>
);

export default SignIn;
