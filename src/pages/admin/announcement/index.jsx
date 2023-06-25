import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import {
  NavBarDashBoard, SearchDashboard, SideBar, Table,
} from '../../../components';
import FormDashBoard from '../../../components/formDashboard/FormDashBoard';
import Provider from '../../../context/Provider';
import { columns, rows } from '../../../dummyData/announcementData';

const AnnouncementDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Provider setShowForm={setShowForm}>
      <Box>
        <NavBarDashBoard />
        <Box sx={{ display: 'flex' }}>
          <SideBar />
          <Box>
            <Container>
              <Box my={15}>
                <SearchDashboard btnText="Add Announcement" />
                <Table columns={columns} rows={rows} />
              </Box>
            </Container>
          </Box>
          {/* <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: showForm ? 'block' : 'none',
          }}
          >

            <FormDashBoard />
          </Box> */}
        </Box>
      </Box>

    </Provider>
  );
};

export default AnnouncementDashboard;
