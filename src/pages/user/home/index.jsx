import { Box, Container } from '@mui/material';
import React from 'react';
import Header from '../../../components/headerClient/Header';
import { SliderComp } from '../../../components';

const Home = () => (
  <Box>
    <Header />
    <Container>
      <SliderComp />
    </Container>
  </Box>
);

export default Home;
