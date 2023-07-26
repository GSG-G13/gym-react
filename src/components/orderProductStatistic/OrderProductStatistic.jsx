/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Box, Typography } from '@mui/material';

const OrderProductStatistic = ({ product, orders }) => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottom: '1px solid #ccc',
    p: '10px',
  }}
  >
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
    }}
    >
      <img
        src={product.image}
        width="30px"
        height="30px"
        alt="pic-order-product"
        style={{
          borderRadius: '50%',
          marginRight: '10px',
          boxShadow: '0 4px 4px 0 #C4C4C4',
        }}
      />
      <Typography variant="h6" fontWeight="600">
        {' '}
        {product.title}
      </Typography>
    </Box>
    <Box>
      <Typography variant="h6">{orders.filter((order) => product._id === order.productId._id).length}</Typography>
    </Box>

  </Box>
);

export default OrderProductStatistic;
