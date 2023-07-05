import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../../components/headerClient/Header';
import { SliderComp } from '../../../components';
import SwiperComp from '../../../components/swiper';

const Home = () => {
  const [trainersData, setTrainersData] = useState([]);

  const fetchData = async () => {
    try {
      const trainers = await axios.get('/api/users/trainers');
      setTrainersData(trainers.data.allTrainers);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box>
      <Header />
      <Container>
        <Box>
          <Box mb={10}>
            <SliderComp />
          </Box>
          <Box mb={10} position="relative">
            <SwiperComp trainers={trainersData} />
          </Box>
        </Box>
      </Container>

    </Box>
  );
};

export default Home;
