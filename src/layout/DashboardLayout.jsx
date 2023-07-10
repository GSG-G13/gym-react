import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { NavBarDashBoard, SideBar } from '../components';
import useAuth from '../hook/useAuth';

const DashboardLayout = () => {
  const [users, setUsers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [subs, setSubs] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ordersData, setOrdersData] = useState([]);

  const trainers = users.filter((user) => user.role === 'trainer');

  const getUsers = async () => {
    const { data } = await axios.get('/api/users');
    setUsers(data.allUsers);
  };
  const getClasses = async () => {
    const { data } = await axios.get('/api/classes');
    setClasses(data.classesData);
  };
  const getSubs = async () => {
    const { data } = await axios.get('/api/subscriptions');
    setSubs(data.subscriptionsData);
  };
  const getProducts = async () => {
    const { data } = await axios.get('/api/products');
    setProducts(data.products);
  };
  const getCategories = async () => {
    const { data } = await axios.get('/api/categories');
    setCategories(data.categories);
  };

  const getOrders = async () => {
    const { data: { orders } } = await axios.get('/api/orders');
    setOrdersData(orders);
  };

  useEffect(() => {
    getUsers();
    getClasses();
    getSubs();
    getProducts();
    getCategories();
    getOrders();
  }, []);

  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{
      backgroundColor: user?.role === 'admin' ? '#fff' : '#1E1E1E',
      color: user?.role === 'admin' ? '#000' : '#fff',

    }}
    >
      <NavBarDashBoard />
      <Box mt={8} minHeight="92vh" sx={{ display: 'flex' }}>
        <SideBar />
        <Outlet context={[users, classes, subs, products, categories, trainers, ordersData]} />
      </Box>

    </Box>
  );
};

export default DashboardLayout;
