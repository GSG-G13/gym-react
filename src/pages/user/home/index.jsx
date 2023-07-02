import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../../../components/headerClient/Header';
import { SliderComp } from '../../../components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
  'https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg',
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
        <Box mb={10} position="relative">
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

            {images.map((item) => (
              <SwiperSlide style={{
                padding: '40px 0px', display: 'flex', flexDirection: 'column', gap: 15,
              }}
              >
                <img height={350} width="300px" style={{ margin: 'auto', borderRadius: 40 }} src={item} alt={item} />
                <Typography variant="h4" fontWeight={700} textAlign="center">trainer</Typography>
                <Typography variant="h6" fontWeight={100} textAlign="center">gym trainer</Typography>
              </SwiperSlide>
            ))}

          </Swiper>
        </Box>
      </Box>
    </Container>

  </Box>
);

export default Home;
