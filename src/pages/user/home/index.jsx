import { Box, Container } from '@mui/material';
import React from 'react';
import SectionHome from '../../../components/sectionHome/index';

import Header from '../../../components/headerClient/Header';
import { SliderComp } from '../../../components';
import SwiperComp from '../../../components/swiper';
import VideoPlayer from '../../../components/videoCom';

const Home = () => (
  <Box>
    <Header />
    <Container>
      <Box>
        <Box mb={10}>
          <SliderComp />
        </Box>
        <Box>
          <SectionHome />
        </Box>
        <Box mb={10}>
          <VideoPlayer />
        </Box>
        <Box mb={10} position="relative">
          <SwiperComp />
        </Box>
      </Box>
    </Container>

  </Box>
);

export default Home;
