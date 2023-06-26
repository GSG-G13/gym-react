import React from 'react';
import { Box, Container } from '@mui/material';
import { rows, columns } from './dummyData';
import {
  NavbarClient, Table, PersonalInfo, ProfileNav, Footer,
} from '../../../components';

const UserProfile = () => (
  <Box>
    <NavbarClient />
    <Box mt={2}>
      <Container>
        <Box m="auto" width="70%">

          <Box>
            <PersonalInfo />
          </Box>
          <Box>
            <ProfileNav />
          </Box>
          <Box>
            <Table columns={columns} rows={rows} />
          </Box>
        </Box>

      </Container>
    </Box>

    <Footer />
  </Box>
);

export default UserProfile;
