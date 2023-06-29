import React from 'react';
import { Box, Container } from '@mui/material';
import {
  ProductList,
  CategoriesList,
  HomeStore,
} from '../../../components';
import StoreLayout from '../../../layout';

const Store = () => (
  <Box>
    <Container>
      <StoreLayout />
      {/* <HomeStore />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
        <CategoriesList />
        <ProductList />
      </Box> */}
    </Container>
  </Box>
);

export default Store;
