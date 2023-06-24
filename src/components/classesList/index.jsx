import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

const classes = ['Yoga', 'Building', 'Fitness', 'food'];
const ClassesList = () => (
  <Box border="1px solid #ccc" width={300}>
    <Typography p={2}>Classes</Typography>
    <Divider />
    <Box>
      {classes.map((classitem) => (<Typography p={2} sx={{ backgroundColor: classitem === 'Yoga' ? 'colors.darkBlue' : 'none', color: classitem === 'Yoga' ? '#fff' : '#000' }} mt={3}>{classitem}</Typography>))}
    </Box>
  </Box>
);

export default ClassesList;
