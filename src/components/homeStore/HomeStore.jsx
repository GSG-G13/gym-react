import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HomeStore = () => (
  <Box height="100vh">
    <Container>
      <Box display="flex" marginTop="10px" height="700px" justifyContent="space-around">
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" flex="0.4">

          <Typography fontWeight={600} variant="h1" color="#FF4601">GYM Store</Typography>
          <Typography mt={3} variant="h5" sx={{ lineHeight: '1.5', letterSpacing: '1.5px', pb: '50px' }}>
            At Gym, you can shop for all useful stuff , clothes,
            accessories, tools and more at a single place.

          </Typography>

          <div
            className="sec-store"
            style={{
              color: '#FF4601',
              borderBottomRightRadius: '50%',
              borderBottomLeftRadius: '50%',
              backgroundColor: 'white',
              width: '80px',
              height: '95px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '30px',
              fontWeight: '500',

            }}
          >
            50%
          </div>
        </Box>
        <Box flex="0.6">
          <img
            src="../../src/assets/My_project.png"
            alt="store-pic"
            width="100%"
          />

        </Box>
      </Box>
    </Container>
  </Box>

);

export default HomeStore;
