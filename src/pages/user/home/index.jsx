import { Box, Container } from '@mui/material';
import React from 'react';
import SectionHome from '../../../components/sectionHome/index';

import Header from '../../../components/headerClient/Header';
import { SliderComp } from '../../../components';
import SwiperComp from '../../../components/swiper';
import VideoPlayer from '../../../components/videoCom';

const images = ['https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg',
  'https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg',
  'https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg',
  'https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg',
  'https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg',
  'https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg'];

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
          <SwiperComp images={images} />
        </Box>
      </Box>
    </Container>

  </Box>
);

export default Home;
