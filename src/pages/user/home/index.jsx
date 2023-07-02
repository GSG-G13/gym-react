import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../../components/headerClient/Header';
import { SliderComp } from '../../../components';
import SwiperComp from '../../../components/swiper';

const Home = () => {
  const [trainersData, setTrainersData] = useState([]);

  const handleDataChange = (newData) => {
    setTrainersData(newData);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const trainers = await axios.get('http://localhost:5050/api/users/trainers');
        console.log(trainers.data);
        await handleDataChange(trainers.data.allTrainers);
        console.log(trainersData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    console.log(trainersData);
  }, []);
  console.log(trainersData);
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
