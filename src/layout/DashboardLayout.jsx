import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NavBarDashBoard } from '../components';

const DashboardLayout = () => (
  <Box border="1px solid blue">
    <NavBarDashBoard />
    <Box minHeight="92vh" border="1px solid red">
      <Outlet />
    </Box>

  </Box>
);

export default DashboardLayout;
