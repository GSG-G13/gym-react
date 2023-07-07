import React from 'react';
import { Box, Button } from '@mui/material';

const profileNav = ['orders', 'classes'];
const ProfileNav = ({ setTableName, getData }) => (

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
    {profileNav.map((item) => (
      <Button
        key={item}
        onClick={() => setTableName(item) || getData()}
      >
        {item}

      </Button>
    ))}

  </Box>

);

export default ProfileNav;
