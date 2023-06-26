import React from 'react';
import { Box, Container } from '@mui/material';
import { NavbarClient, AnnouncementList, Footer } from '../../../components';

const AnnouncementContainer = () => (
  <Box>
    <NavbarClient />
    <Container>
      <AnnouncementList />
    </Container>
    <Footer />
  </Box>
);

export default AnnouncementContainer;
