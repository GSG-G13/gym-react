import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Provider from '../../../context/Provider';
import {
  NavBarDashBoard, SearchDashboard, SideBar, Table,
} from '../../../components';
import FormDashBoard from '../../../components/formDashboard/FormDashBoard';

const DashBoardLayOut = ({ columns, rows, userInfo }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Provider setShowForm={setShowForm}>
      <Box>
        <NavBarDashBoard />
        <Box sx={{ display: 'flex' }} width="100%" height="100vh">
          <SideBar />
          <Container>
            <Box
              height="100%"
              sx={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, position: 'relative',
              }}
            >
              <SearchDashboard btnText="Add Product" />
              <Table columns={columns} rows={rows} />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                display: showForm ? 'block' : 'none',
              }}
            >
              <FormDashBoard userInfo={userInfo} />
            </Box>
          </Container>
        </Box>
      </Box>
    </Provider>
  );
};

export default DashBoardLayOut;
