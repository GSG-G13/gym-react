import { Box, Container } from '@mui/material';
import React from 'react';
import { ProductDetails, NavbarClient } from '../../../components';
import Footer from '../../../footer/Footer';

const ProductDetailsContainer = () => (
  <Box>
    <NavbarClient />
    <Container>
      <Box mt={18} mb={9}>
        <ProductDetails />
      </Box>
    </Container>
    <Footer />

  </Box>
);

export default ProductDetailsContainer;
