import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Image from '../../styles/image';

const Announcement = ({ announce }) => (
  <Box
    mt={3}
    sx={{
      border: '1px solid #ccc', width: 846, padding: '10px 15px', borderRadius: '20px',
    }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} p={1}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <PersonIcon sx={{
          border: '1px solid', borderRadius: 50, mr: 1, width: 30, height: 30,
        }}
        />
        <Typography variant="h4" fontWeight={500}>{announce.roleId.username}</Typography>
      </Box>
      <Typography
        sx={{
          backgroundColor: 'colors.darkBlue', padding: '10px 20px', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px', color: '#fff',
        }}
        variant="h6"
      >
        {announce.createdAt.split(':')[0].slice(0, 10).replaceAll('-', '/')}
      </Typography>

    </Box>
    <Divider />

    <Box p="10px">
      <Typography mt={1} variant="h3" fontWeight={600}>{announce.title}</Typography>
      <Typography mt={2} mb={2} color="text.primary" variant="h4">{announce.description}</Typography>
      <Box sx={{ height: '420px' }}>
        <Image src={announce.image} alt="gym" width="100%" height="100%" />

      </Box>
    </Box>
  </Box>
);
export default Announcement;
