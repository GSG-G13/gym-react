import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Footer, NavbarClient } from '../components';

const Root = () => (
  <Box>
    <NavbarClient />
    <Outlet />
    <Footer />
  </Box>
);

export default Root;
