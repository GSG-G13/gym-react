import React from 'react';
import { Box, Container } from '@mui/material';
import { rows, columns } from './dummyData';
import {
  Table, PersonalInfo, ProfileNav,
} from '../../../components';

const UserProfile = () => (
  <Box>
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

  </Box>
);

export default UserProfile;
