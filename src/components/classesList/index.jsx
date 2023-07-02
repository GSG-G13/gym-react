import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

const classes = ['Yoga', 'Building', 'Fitness', 'food'];
const ClassesList = () => (
  <Box width={350} border="1px solid #ccc" mt={15} mb={15} borderRadius={5} p={3}>
    <Typography pt={15} sx={{ fontSize: '25px', padding: '26px', paddingLeft: '5px' }}>Classes</Typography>
    <Divider />
    <Box>
      {classes.map((classitem) => (
        <Typography
          key={classitem}
          p={2}
          sx={{
            backgroundColor: classitem === 'Yoga' ? 'colors.darkBlue' : 'none',
            color: classitem === 'Yoga' ? '#fff' : '#000',
            fontSize: '16px',
          }}
          mt={3}
        >
          {classitem}
        </Typography>
      ))}
    </Box>
  </Box>
);

export default ClassesList;
