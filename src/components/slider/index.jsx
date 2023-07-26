/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../../styles/swiper.css';
import { Box, Typography } from '@mui/material';

const images = [
  'https://img.freepik.com/free-photo/woman-with-visible-abs-doing-fitness_23-2150228908.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iWj_vyiCFGummOzn8w8UEDNSZbZZxGPR3xx-7gyAyctSPKf4ARUP-9dayfcztqAbtW0&usqp=CAU',
  'https://images.wsj.net/im-376632/social',
  'https://c4.wallpaperflare.com/wallpaper/679/865/217/machine-workout-fitness-gym-wallpaper-preview.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSSE1Sis0dN23uDZEP3JXtSRP-L-QHFVN9A&usqp=CAU',
  'https://cdn.i-scmp.com/sites/default/files/styles/652x446/public/d8/images/methode/2019/08/16/8a886dee-bcd9-11e9-8f25-9b5536624008_image_hires_181832.jpg?itok=UaEfrmb5&v=1565950717',
];

const NextArrow = ({ onClick }) => (
  <button type="submit" className="arrow next" onClick={onClick}>
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button type="submit" className="arrow prev" onClick={onClick}>
    <FaArrowLeft />
  </button>
);

const SliderComp = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    FullWidthMode: true,
    infinite: true,
    lazyLoad: true,
    speed: 800,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <Box className="sliderCom" my="100px">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <Box
            key={img}
            className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
          >
            <Typography
              textTransform="capitalize"
              variant="h2"
              textAlign="center"
              color="#FF4601"
              fontWeight="600"
            >
              Find what moves you
            </Typography>
            <Typography fontWeight={100} variant="h6" my={2} textAlign="center">
              Are you ready to change?
            </Typography>
            <img src={img} alt={img} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderComp;
