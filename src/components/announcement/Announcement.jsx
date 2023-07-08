import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Image from '../../styles/image';

const Announcement = ({ announce }) => (
  <Box
    mt={3}
    sx={{
      border: '1px solid #4c4a4a', width: 846, padding: '10px 15px', borderRadius: '20px',
    }}
  >
    <Box
      sx={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #4c4a4a',
      }}
      p={1}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <PersonIcon sx={{
          border: '1px solid #ff4601', borderRadius: 50, mr: 1, width: 35, height: 35, p: '3px',
        }}
        />
        <Typography variant="h5" fontWeight={500} color="#fff" textTransform="capitalize">{announce.roleId?.username}</Typography>
      </Box>
      <Typography
        sx={{
          backgroundColor: 'colors.darkBlue', padding: '10px 20px', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px', color: '#fff',
        }}
        variant="h5"
      >
        {announce.createdAt.split(':')[0].slice(0, 10).replaceAll('-', '/')}
      </Typography>

    </Box>
    <Divider />

    <Box p="10px">
      <Typography mt={1} variant="h4" color="#ff4601" fontWeight={600}>{announce.title}</Typography>
      <Typography mt={2} mb={2} color="#fff" variant="body2" maxWidth="650px" width="100%">{announce.description}</Typography>
      {announce.image
      && (
      <Box sx={{ height: '350px' }}>
        <Image src={announce.image} alt="gym" width="100%" height="100%" />

      </Box>
      )}
    </Box>
  </Box>
);
export default Announcement;
