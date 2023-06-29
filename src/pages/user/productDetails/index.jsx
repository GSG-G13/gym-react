import { Box, Container } from '@mui/material';
import React from 'react';
import { ProductDetails } from '../../../components';

const ProductDetailsContainer = () => (
  <Box>
    <Container>
      <Box mt={18} mb={9}>
        <ProductDetails />
      </Box>
    </Container>
  </Box>
);

export default ProductDetailsContainer;
