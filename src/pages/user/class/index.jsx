import { Box, Container } from '@mui/material';
import React from 'react';
import { ClassInfoComp } from '../../../components';
import Provider from '../../../context/Provider';

const Class = () => (
  <Provider>
    <Box>
      <Container>
        <Box my={15} sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <ClassInfoComp />
        </Box>
      </Container>
    </Box>
  </Provider>
);
export default Class;
