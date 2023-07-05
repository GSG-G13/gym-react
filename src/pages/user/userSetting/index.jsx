import React, { useState, useEffect } from 'react';
import { Container } from '@mui/system';
import { Box } from '@mui/material';
import {
  UserSettingData,
} from '../../../components';
import Provider from '../../../context/Provider';
import DashboardNewPopUp from '../../../components/newPopUpComp';

const UserSetting = () => {
  const [showForm, setShowForm] = useState(false);
  const [userData, setuserData] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goalweight, setGoalWeight] = useState('');
  const states = [username, email, age, gender, weight, height, goalweight];
  const setStates = [setUsername, setEmail, setAge, setGender, setWeight, setHeight, setGoalWeight];
  // const userData = [
  //   userSettingData.username,
  //   userSettingData.email,
  //   userSettingData.gender,
  //   userSettingData.weight,
  //   userSettingData.height,
  //   userSettingData.goalweight,
  //   userSettingData.age,
  // ];

  // const getUserData =  () => {
  //   // const userSettingData = await JSON.parse(localStorage.getItem('userData'));
  // };

  useEffect(() => {
    setuserData('test data 123');
  }, []);

  return (
    <Provider setShowForm={setShowForm} editBtnText="Edit info" deleteBtnText="Delete Account">
      <Box my={15} position="relative">
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <UserSettingData states={states} setStates={setStates} />
          <DashboardNewPopUp
            buttonName="Edit"
            states={states}
            setStates={setStates}
            myData="check"
            username={username}
            userData={userData}
          />
        </Container>
      </Box>
    </Provider>
  );
};
export default UserSetting;
