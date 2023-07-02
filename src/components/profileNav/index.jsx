import React from 'react';
import { Box, Typography } from '@mui/material';

const ProfileNav = () => (

  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    backgroundColor: 'colors.secondary',
    width: '100%',
    borderRadius: '10px',
    px: '20px',
    m: ' 0 auto',
    mb: '20px',
  }}
  >

    <Typography variant="h4" fontWeight="700">Orders</Typography>
    <Typography variant="h4" fontWeight="700">Classes</Typography>
  </Box>

);

export default ProfileNav;
