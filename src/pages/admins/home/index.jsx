/* eslint-disable no-underscore-dangle */
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  CardDash, ChartDash, OrderStatistics, RatingDash,
} from '../../../dashboardComponents';

const HomeDash = () => {
  const [mostOrders, setMostOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [classes, setClasses] = useState([]);
  const [subs, setSubs] = useState([]);
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
    setMostOrders(arr);
  };

  const getProducts = async () => {
    const { data } = await axios.get('/api/products');
    setProducts(data.products);
  };
  const getUsers = async () => {
    const { data } = await axios.get('/api/users');
    setUsers(data.allUsers);
  };
  const getTrainers = async () => {
    const { data } = await axios.get('/api/users/trainers');
    setTrainers(data.allTrainers);
  };
  const getCategories = async () => {
    const { data } = await axios.get('/api/categories');
    setCategories(data.categories);
  };
  const getClasses = async () => {
    const { data } = await axios.get('/api/classes');
    setClasses(data.classesData);
  };
  const getSubs = async () => {
    const { data } = await axios.get('/api/subscriptions');
    setSubs(data.subscriptionsData);
  };

  useEffect(() => {
    getOrders();
    getProducts();
    getUsers();
    getTrainers();
    getCategories();
    getClasses();
    getSubs();
  }, []);
  return (
    <Box py={10}>
      <Typography color="#fff" mb={3}>Dashboard</Typography>
      <Box
        height={400}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <ChartDash />
        <OrderStatistics mostOrders={mostOrders} products={products} />
      </Box>

      <Box mt={10}>
        <Typography color="#fff">Statistics</Typography>
        <Box sx={{ display: 'grid', gap: 5, gridTemplateColumns: '4fr 2fr' }}>
          <CardDash
            users={users}
            trainers={trainers}
            categories={categories}
            products={products}
            classes={classes}
            subs={subs}
          />
          <RatingDash subs={subs} mostOrders={mostOrders} />
        </Box>
      </Box>

    </Box>
  );
};

export default HomeDash;
