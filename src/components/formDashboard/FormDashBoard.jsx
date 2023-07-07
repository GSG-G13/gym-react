/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Box, Select, Typography } from '@mui/material';
import InputForm from './InputForm';
import GroupButtons from './GroupButtons';

const FormDashBoard = ({
  userInfo, text, onClick, setStates, axiosData, filedName, value, selectList,
}) => (
  <Box backgroundColor="#fff" border="1px solid #ccc" p={2}>
    <Typography sx={{ color: '#000', textAlign: 'center' }}>{text}</Typography>

    <Box
      p="40px"
      sx={{
        display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 2, width: '675px ',
      }}
    >

      {userInfo.map((info, index) => (
        <InputForm
          key={info}
          setState={setStates}
          filedName={filedName[index]}
          value={value[index]}
        >
          {' '}
          {info}
        </InputForm>
      ))}

      <Select onChange={(e) => setStates(e, filedName[filedName.length - 1])}>
        <option disabled selected>select tranier</option>
        {selectList.map((list) => <option value={list._id}>{list.username}</option>)}
      </Select>

    </Box>
    <GroupButtons onClick={onClick} axiosData={axiosData} />

  </Box>

);

export default FormDashBoard;
