import { Box, Container, Typography } from '@mui/material';
import React from 'react';
// import shopping from '../../assets/shopping.png';
import { ReactComponent as HomeImage } from '../../assets/homeStore.svg';
// import { ReactComponent as Shopping } from '../../assets/homeStore.svg';
import { ReactComponent as Shopping } from '../../assets/shopping.svg';

const HomeStore = () => (
  <Box>
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'end' }} border="1px solid #ccc">
        <Shopping style={{ width: '50%', height: '100%' }} />

        <Box width={400} sx={{ position: 'absolute', left: 390, top: 100 }}>
          <Typography fontWeight={700} variant="h1">GYM Store</Typography>
          <Typography mt={3} variant="h5">
            At Gym, you can shop for all useful stuff , clothes,
            accessories, tools and more at a single place.

          </Typography>
        </Box>
        <HomeImage style={{ width: '50%', height: '100%' }} />
      </Box>
    </Container>
    {/* <img src={homeImage} alt="store-pic" style={{ width: '50%' }} /> */}
  </Box>
);

export default HomeStore;
