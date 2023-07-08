import React from 'react';
import { Box, Button } from '@mui/material';

const profileNav = ['orders', 'classes'];
const ProfileNav = ({ setTableName, getData }) => (

  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '60px',
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    gap: 10,
    borderRadius: '10px',
    px: '20px',
    m: ' 0 auto',
    my: '50px',
  }}
  >
    {profileNav.map((item) => (
      <Button
        key={item}
        sx={{ backgroundColor: item ? '#FF4601' : null, color: '#fff' }}
        onClick={() => setTableName(item) || getData()}
      >
        {item}

      </Button>
    ))}

  </Box>

);

export default ProfileNav;
