import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Provider from '../../../context/Provider';
import {
  Alerts, SearchDashboard, Table,
} from '../../../components';

const DashBoardLayOut = ({
  columns, rows, userInfo,
  setStates,
  buttonName, error,
  axiosData,
  filedName, value,
  selectList,
  page,
}) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Provider setShowForm={setShowForm}>
      <Box mt={8} width="100%" height="100vh">
        <Container>
          <Box
            height="100%"
            sx={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, position: 'relative',
            }}
          >
            {!page ? (
              <SearchDashboard
                btnText={buttonName}
                userInfo={userInfo}
                setStates={setStates}
                axiosData={axiosData}
                filedName={filedName}
                value={value}
                selectList={selectList}
              />
            )
              : null}
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
    </Provider>
  );
};

export default DashBoardLayOut;
