import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const ProductDetailsContainer = () => (
  <Box>
    <Container>
      <Box mt={18} mb={9}>
        <Outlet />
      </Box>
    </Container>
  </Box>
);

export default ProductDetailsContainer;
