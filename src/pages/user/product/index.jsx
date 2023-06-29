import React from 'react';
import { Box, Container } from '@mui/material';
import {
  ProductList,
  CategoriesList,
  HomeStore,
} from '../../../components';

const Store = () => (
  <Box>
    <Container>
      <HomeStore />
      <Box sx={{ display: 'flex', gap: '90px' }}>
        <CategoriesList />
        <ProductList />
      </Box>
    </Container>
  </Box>
);

export default Store;
