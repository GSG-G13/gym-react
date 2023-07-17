/* eslint-disable no-underscore-dangle */
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  DashTable, SearchInpDash,
} from '../../../dashboardComponents';
import ToastAlert from '../../../components/toastAlert/ToastAlert';

const orderInfoTable = ['product', 'image', 'username', 'amount', 'totalPrice', 'status'];

const OrderDash = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const { data } = await axios.get('/api/orders');
    const arr = [];
    data.orders.map((order) => arr.push(
      {
        _id: order._id,
        username: order.userId.username,
        product: order.productId.title,
        image: order.productId.image,
        amount: order.amount,
        totalPrice: order.totalPrice,
        status: order.status,
      },
    ));
    setOrders(arr);
  };

  const deleteOrder = async (id) => {
    try {
      axios.delete(`/api/orders/${id}`);
      toast.success('Delete Order successfully!', { theme: 'dark' });
    } catch (error) {
      toast.error('Delete Failed!', { theme: 'dark' });
    }
  };

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <Box mt={10}>
      <ToastAlert />
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <SearchInpDash />
      </Box>

      <Box mt={5}>
        <DashTable
          array={orders}
          userInfo={orderInfoTable}
          deleteFunction={deleteOrder}
        />
      </Box>

    </Box>
  );
};

export default OrderDash;
