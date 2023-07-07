import React from 'react';
import { Box, Typography } from '@mui/material';

const HomeStore = () => (
  <Box
    height="100vh"
    sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundImage: 'url(https://static.wixstatic.com/media/11062b_7e91a71d17284e8aaeaa6362a4eb7d92~mv2.jpg/v1/fill/w_640,h_854,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_7e91a71d17284e8aaeaa6362a4eb7d92~mv2.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      objectFit: 'cover',

    }}
  >

    <Box ml="54px" display="flex" alignItems="center" justifyContent="center" flexDirection="column" border="1px solid red" flex={0.45}>

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
          width: '70px',
          height: '85px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          fontWeight: '500',

        }}
      >
        50%
      </div>
    </Box>
  </Box>

);

export default HomeStore;
