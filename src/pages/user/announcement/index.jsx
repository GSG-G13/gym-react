import React from 'react';
import { Box, Container } from '@mui/material';
import { NavbarClient, AnnouncementList } from '../../../components';
import Footer from '../../../footer/Footer';

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
