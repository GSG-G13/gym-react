import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import ButtonComponent from '../button/Button';

const Header = () => (

  <Box
    height="100vh"
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(\'https://img.freepik.com/free-photo/muscular-sportsman-building-biceps-with-dumbbell_7502-4784.jpg\')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

    }}
  >
    <Container>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          align="center"
          height="500px"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h1" fontWeight="700" fontSize="50px" width="500px" letterSpacing={2}>
            <Typography variant="span" fontWeight="700" sx={{ color: '#FF4601' }}>Unleash </Typography>
            Your Inner Athlete
          </Typography>
          <Typography variant="h5" fontWeight={400} align="center" width="460px" my={3}>
            Get ready to sweat it out and achieve your fitness goals with
            our high-energy fitness classes!
            We provide a fun
            and motivating environment to help you reach your peak performance.
          </Typography>
          <Box sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px',
          }}
          >
            <ButtonComponent color="colors.darkBlue">
              <Link style={{ color: '#fff', textDecoration: 'none' }} to="/class">Classes</Link>
            </ButtonComponent>
            <ButtonComponent color="colors.darkBlue">
              <Link style={{ color: '#fff', textDecoration: 'none' }} to="/store">Shop Now</Link>
            </ButtonComponent>
          </Box>
        </Box>
        <Box />
      </Box>
    </Container>
  </Box>
);

export default Header;
