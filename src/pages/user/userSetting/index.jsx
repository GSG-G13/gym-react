import React, { useState } from 'react';
import { Container } from '@mui/system';
import { Box } from '@mui/material';
import {
  Footer, FormDashBoard, NavbarClient, UserSettingData,
} from '../../../components';
import Provider from '../../../context/Provider';

const userInfo = ['username', 'email', 'gender', 'weight', 'height', 'password', 'age', 'goalweight',
];
const UserSetting = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Provider setShowForm={setShowForm} editBtnText="Edit info" deleteBtnText="Delete Account">
      <Box my={15} position="relative">
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <UserSettingData />
          <Box sx={{
            display: showForm ? 'block' : 'none', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          }}
          >
            <FormDashBoard userInfo={userInfo} text="user information" />

          </Box>
        </Container>
      </Box>
    </Provider>
  );
};
export default UserSetting;
