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
  const [filterOrders, setFilterOrders] = useState([]);

  const getOrders = async () => {
    const { data } = await axios.get('/api/orders');
    const arr = [];
    data.orders.map((order) => arr.push(
      {
        _id: order?._id,
        username: order.userId?.username,
        product: order.productId?.title,
        image: order.productId?.image,
        amount: order?.amount,
        totalPrice: order?.totalPrice,
        status: order?.status,
      },
    ));
    setOrders(arr);
  };

  const deleteOrder = async (id) => {
    try {
      axios.delete(`/api/orders/${id}`);
      getOrders();
      toast.success('Delete Order successfully!', { theme: 'dark' });
    } catch (error) {
      toast.error('Delete Failed!', { theme: 'dark' });
    }
  };

  const updateOrder = async (id) => {
    try {
      await axios.put(`/api/orders/${id}`);
      getOrders();

      toast.success('updated Order\'s status successfully!', { theme: 'dark' });
    } catch (error) {
      console.log(error);
    }
  };
  const filterFunc = ({ text }) => {
    if (text) {
      setFilterOrders(() => orders.filter((item) => item.product.includes(text)));
    } else {
      setFilterOrders(orders);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);
  const ordersArray = filterOrders.length > 0 ? filterOrders : orders;

  return (
    <Box mt={10}>
      <ToastAlert />
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        {orders && orders?.length > 0 && <SearchInpDash data={orders} handleClick={filterFunc} searchBy="product" />}
      </Box>

      <Box mt={5}>
        <DashTable
          array={ordersArray}
          userInfo={orderInfoTable}
          deleteFunction={deleteOrder}
          updateSubscription={updateOrder}
        />
      </Box>

    </Box>
  );
};

export default OrderDash;
