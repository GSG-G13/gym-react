import React, { useState } from 'react';
import { Container } from '@mui/system';
import { Box } from '@mui/material';
import {
  FormDashBoard, UserSettingData,
} from '../../../components';
import Provider from '../../../context/Provider';
import DashboardNewPopUp from '../../../components/newPopUpComp';

const UserSetting = () => {
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goalweight, setGoalWeight] = useState('');
  const states = [username, email, gender, weight, height, goalweight];
  const setStates = [setUsername, setEmail, setGender, setWeight, setHeight, setGoalWeight];

  return (
    <Provider setShowForm={setShowForm} editBtnText="Edit info" deleteBtnText="Delete Account">
      <Box my={15} position="relative">
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <UserSettingData states={states} setStates={setStates} />
        </Container>
      </Box>
    </Provider>
  );
};
export default UserSetting;
