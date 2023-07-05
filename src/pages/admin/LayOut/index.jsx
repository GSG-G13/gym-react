import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Provider from '../../../context/Provider';
import {
  Alerts,
  NavBarDashBoard, SearchDashboard, SideBar, Table,
} from '../../../components';

const DashBoardLayOut = ({
  columns, rows, userInfo, setStates, buttonName, error, axiosData,
}) => {
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
              <SearchDashboard
                btnText={buttonName}
                userInfo={userInfo}
                setStates={setStates}
                axiosData={axiosData}

              />
              {error
                ? <Alerts message={error} type="error" />

                : <Table columns={columns} rows={rows} />}
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                display: showForm ? 'block' : 'none',
              }}
            />
          </Container>
        </Box>
      </Box>
    </Provider>
  );
};

export default DashBoardLayOut;
