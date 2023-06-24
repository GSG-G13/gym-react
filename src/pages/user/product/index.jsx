import React from 'react';
import { Box, Container } from '@mui/material';
import {
  ProductList,
  Header,
  Navbar,
  Footer,
  CategoriesList,
} from '../../../components';

const Store = () => (
  <Box>
    <Navbar />
    <Container>
      <Header />
      <Box sx={{ display: 'flex', gap: '90px' }}>
        <CategoriesList />
        <ProductList />
      </Box>
    </Container>
    <Footer />
  </Box>
);

export default Store;
