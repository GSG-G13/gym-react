/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Typography } from '@mui/material';
import OrderProductStatistic from './Orders';

const products = [1, 2, 3, 4];
const OrderStatistics = () => (
  <Box
    border="1px solid rgba(255,255,255,0.2)"
    p="15px 20px"
    height="400px"
    sx={{
      '&::-webkit-scrollbar': { display: 'none' },
      overflowY: 'scroll',
    }}
  >
    <Box mb="5px">
      <Typography color="#fff" variant="h5" fontWeight="700" mb="3px">Most Ordered Product</Typography>
      <Typography mt={1} variant="body2" sx={{ color: '#999', fontSize: 12 }}>which are the most ordered products</Typography>
    </Box>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      {products?.map((product) => (
        <OrderProductStatistic
          product={product}
        />
      ))}
    </Box>
  </Box>
);

export default OrderStatistics;
