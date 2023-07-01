import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as HomeImage } from '../../assets/homeStore.svg';
import { ReactComponent as Shopping } from '../../assets/shopping.svg';

const HomeStore = () => (
  <Box sx={{ display: 'flex', alignItems: 'center' }} height="100vh">
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'end' }}>
        <Shopping style={{ width: '50%', height: '100%' }} />

        <Box width={400} sx={{ position: 'absolute', left: 460, top: 140 }}>
          <Typography fontWeight={700} variant="h1">GYM Store</Typography>
          <Typography mt={3} variant="h5">
            At Gym, you can shop for all useful stuff , clothes,
            accessories, tools and more at a single place.

          </Typography>
        </Box>
        <HomeImage style={{ width: '50%', height: '100%' }} />
      </Box>
    </Container>
  </Box>
);

export default HomeStore;
