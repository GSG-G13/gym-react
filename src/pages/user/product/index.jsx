import React from 'react';
import { Box } from '@mui/material';
import { useOutletContext } from 'react-router';
import { ProductList } from '../../../components';

const Store = () => {
  const category = useOutletContext();
  return (
    <Box>
      <ProductList category={category} />
    </Box>
  );
};

export default Store;
