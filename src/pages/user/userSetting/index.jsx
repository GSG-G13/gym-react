import React, { useState } from 'react';
import { Container } from '@mui/system';
import { Box } from '@mui/material';
import {
  FormDashBoard, UserSettingData,
} from '../../../components';
import Provider from '../../../context/Provider';

const userInfo = ['username', 'email', 'gender', 'weight', 'height', 'age', 'goalweight',
];
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
          <UserSettingData />
          <Box sx={{
            display: showForm ? 'block' : 'none', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          }}
          >
            <FormDashBoard setShowForm={setShowForm} userInfo={userInfo} text="user information" setStates={setStates} states={states} />

          </Box>
        </Container>
      </Box>
    </Provider>
  );
};
export default UserSetting;
