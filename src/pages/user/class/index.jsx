import { Box } from '@mui/material';
import React from 'react';
import { ClassInfoComp } from '../../../components';

const Class = () => (
  <Box my={15} sx={{ display: 'flex', gap: 4, paddingLeft: '24px' }}>
    <ClassInfoComp />
  </Box>
);

export default Class;
