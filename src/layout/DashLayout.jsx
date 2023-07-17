import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavbarDash, SideBar } from '../dashboardComponents';

const DashLayout = () => (
  <Box sx={{ backgroundColor: '#000' }} overflow="hidden" position="relative">
    <NavbarDash />
    <Box sx={{
      display: 'flex',
      minHeight: 'calc(100vh - 65px)',
    }}
    >
      <SideBar />
      <Container>
        <Outlet />
      </Container>
    </Box>
  </Box>
);

export default DashLayout;
