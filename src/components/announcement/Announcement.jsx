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
        <Typography variant="h5">{announce}</Typography>
      </Box>
      <Typography
        sx={{
          backgroundColor: 'colors.darkBlue', padding: '10px 20px', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px', color: '#fff',
        }}
        variant="h6"
      >
        20/3/1992
      </Typography>

    </Box>
    <Divider />

    <Box p="10px">
      <Typography mt={1} variant="h5">Title Announcement</Typography>
      <Typography mt={1} mb={1} variant="h6">Announcement content: Lorem ipsum dolor, sit amen consectetur adipisicing elite. Destruct, consecrator!</Typography>
      <Box sx={{ height: 248 }}>
        <Image src="https://betterbody.ie/wp-content/uploads/elementor/thumbs/strong-man-training-in-gym-1-scaled-puc6dnltxn54i7tqe8yfryh0a4wn9r8z3ewgicqsqo.jpg" alt="gym" width="100%" height="100%" />

      </Box>
    </Box>
  </Box>
);

export default Announcement;
