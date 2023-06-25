import React from 'react';
import { Container } from '@mui/system';
import { Box } from '@mui/material';
import { FormDashBoard, NavbarClient } from '../../../components';
import Provider from '../../../context/Provider';
import Footer from '../../../footer/Footer';

const userInfo = ['username', 'email', 'gender', 'weight', 'height', 'password', 'age', 'goalweight',
];
const UserSetting = () => (
  <Provider editBtnText="Edit info" deleteBtnText="Delete Account">
    <NavbarClient />
    <Box my={15}>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>

        <FormDashBoard userInfo={userInfo} text="user information" />
      </Container>
    </Box>
    <Footer />
  </Provider>
);
export default UserSetting;
