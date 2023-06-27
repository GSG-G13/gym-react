import { Box } from '@mui/material';
import React from 'react';
import { Container } from '@mui/system';
import NavbarClient from '../../../components/navbar/NavbarClient';
import { ClassInfoComp, Footer } from '../../../components';
import Provider from '../../../context/Provider';

const Class = () => (
  <Provider>
    <Box>
      <NavbarClient />
      <Container>
        <Box my={15} sx={{ display: 'flex', gap: 4 }}>
          <ClassInfoComp />
        </Box>
      </Container>

      <Footer />
    </Box>
  </Provider>
);

export default Class;
