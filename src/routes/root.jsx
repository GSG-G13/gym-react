import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Footer, NavbarClient } from '../components';
import useAuth from '../hook/useAuth';

const Root = () => {
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
      <NavbarClient />
      <Outlet />
      <Footer />
    </Box>

  );
};

export default Root;
