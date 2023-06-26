import { Box, Container } from '@mui/material';
import React from 'react';
import NavbarClient from '../../../components/navbar/NavbarClient';
import Header from '../../../components/headerClient/Header';
import { Footer, SliderComp } from '../../../components';

const Home = () => (
  <Box>
    <NavbarClient />
    <Header />
    <Container>
      <SliderComp />

    </Container>

    <Footer />
  </Box>
);

export default Home;
