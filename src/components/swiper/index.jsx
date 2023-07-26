/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

const SwiperComp = ({ images }) => {
  const [trainers, setTrainers] = useState([]);
  const getTrainers = async () => {
    const { data } = await axios.get('/api/users/trainers');
    setTrainers(data.allTrainers);
  };

  useEffect(() => {
    getTrainers();
  }, []);
  return (
    <Box>
      <Typography variant="h2" textAlign="center" color="#FF4601" fontWeight={600} mb={5}>Instructors </Typography>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >

        {trainers.map((item, idx) => (
          <SwiperSlide
            key={idx}
            style={{
              padding: '25px 0px', display: 'flex', flexDirection: 'column', gap: 15,
            }}
          >
            <img height={350} width="300px" style={{ margin: 'auto', borderRadius: '10px', boxShadow: 'rgba(231, 90, 37, 0.75) -1px 3px 5px 0px' }} src={item.username} alt={item.username} />
            <Typography variant="h4" fontWeight={700} textAlign="center">{item.username}</Typography>
            <Typography variant="h6" fontWeight={100} textAlign="center">gym trainer</Typography>
          </SwiperSlide>
        ))}

      </Swiper>
    </Box>
  );
};

export default SwiperComp;
