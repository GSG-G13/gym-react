import { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../../styles/swiper.css';
import { Box, Typography } from '@mui/material';

const images = [
  'https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg',
  'https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg',
  'https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg',
  'https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg',
  'https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg',
  'https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg'];

const SliderComp = () => {
  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );

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
    <Box className="sliderCom">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <Box key={img} className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
            <Typography textTransform="capitalize" variant="h2" textAlign="center">hello</Typography>
            <Typography
              fontWeight={100}
              variant="h6"
              my={2}
              textAlign="center"
            >
              hello from this stupid slider Lorem ipsum dolor sit
              amet consectetur adipisicing elis. Nescient, aut.
            </Typography>
            <img src={img} alt={img} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderComp;
