import { Box, Typography } from '@mui/material';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperComp = ({ trainers }) => (
  <Box>
    <Typography variant="h2" textAlign="center" fontWeight={700} mb={5}>Our Team</Typography>
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

      {trainers.map((item) => (
        <SwiperSlide style={{
          padding: '40px 0px', display: 'flex', flexDirection: 'column', gap: 15,
        }}
        >
          <img height={350} width="300px" style={{ margin: 'auto', borderRadius: 40 }} src={item.image} alt={item} />
          <Typography variant="h4" fontWeight={700} textAlign="center">trainer</Typography>
          <Typography variant="h6" fontWeight={100} textAlign="center">gym trainer</Typography>
        </SwiperSlide>
      ))}

    </Swiper>
  </Box>
);

export default SwiperComp;
