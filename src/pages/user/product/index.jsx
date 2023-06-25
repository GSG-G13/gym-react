import React from 'react';
import { Box, Container } from '@mui/material';
import {
  ProductList,
  Footer,
  CategoriesList,
  NavbarClient,
  HomeStore,
} from '../../../components';

const Store = () => (
  <Box>
    <NavbarClient />
    <Container>
      <HomeStore />
      <Box sx={{ display: 'flex', gap: '90px' }}>
        <CategoriesList />
        <ProductList />
      </Box>
    </Container>
    <Footer />
  </Box>
);

export default Store;
