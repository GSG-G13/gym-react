/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import OrderProductStatistic from './OrderProductStatistic';

const ProductStatisticList = () => {
  const [users, classes, subs, products, categories, trainers, ordersData] = useOutletContext();

  return (
    <Box
      border="1px solid #ccc"
      p="15px 20px"
      height="400px"
      sx={{
        '&::-webkit-scrollbar': { display: 'none' },
        overflowY: 'scroll',
      }}
    >
      <Box mb="5px">
        <Typography variant="h5" fontWeight="700" mb="3px">Most Ordered Product</Typography>
        <Typography variant="body2" sx={{ color: '#999' }}>which are the most ordered products</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        {products?.map((product) => (
          <OrderProductStatistic
            product={product}
            orders={ordersData}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductStatisticList;
