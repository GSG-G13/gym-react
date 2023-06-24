import { Box, Container } from '@mui/material';
import React from 'react';
import NavbarClient from '../../../components/navbar/NavbarClient';
import Header from '../../../components/headerClient/Header';
import { SliderComp } from '../../../components';
import Footer from '../../../footer/Footer';

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
