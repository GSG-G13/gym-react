import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HomeStore = () => (
  <Box
    height="100vh"
    sx={{
      backgroundImage: 'url(https://img.pikbest.com/backgrounds/20190917/black-style-fitness-equipment-background_1903548.jpg!bw700)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      objectFit: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
  >
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
    }}
    >
      <Box mt={30} display="flex" alignItems="center" justifyContent="center" flexDirection="column" p={2}>

        <Typography fontWeight={600} variant="h1" fontSize={60} color="#FF4601" display="flex">
          G
          <Typography style={{
            transform: 'translateY(-30px) rotate(30deg)',
            fontSize: 60,
            fontWeight: 600,
          }}
          >
            Y

          </Typography>
          M Store
        </Typography>
        <Typography
          my={3}
          variant="h5"
          sx={{
            lineHeight: '2', width: 500, fontSize: 17, textAlign: 'center',
          }}
        >
          At Gym, you can shop for all useful stuff , clothes,
          accessories, tools and more at a single place.

        </Typography>

        <div
          className="sec-store"
          style={{
            color: '#FF4601',
            borderBottomRightRadius: '50%',
            borderBottomLeftRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '70px',
            height: '85px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontWeight: '700',
            border: '3px solid #FF4601',
          }}
        >
          50%
        </div>
      </Box>
    </Container>
  </Box>

);

export default HomeStore;
