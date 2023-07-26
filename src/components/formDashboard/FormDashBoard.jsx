/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Box, Select, Typography } from '@mui/material';
import InputForm from './InputForm';
import GroupButtons from './GroupButtons';

const FormDashBoard = ({
  userInfo, text, onClick, setStates, axiosData, filedName, value, selectList,
}) => (
  <Box backgroundColor="#3c353533" p={2}>
    <Typography sx={{ color: '#000', textAlign: 'center' }}>{text}</Typography>

    <Box
      p="20px"
      sx={{
        display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', gap: 3, width: '675px ',
      }}
    >

      {userInfo.map((info, index) => (
        <InputForm
          key={info}
          setState={setStates}
          filedName={info}
          value={value[index]}
        >
          {' '}
          {info}
        </InputForm>
      ))}

      {selectList
        ? (
          <Select onChange={(e) => setStates(e, filedName[filedName.length - 1])}>
            <option disabled selected>select tranier</option>
            {selectList.map((list) => <option value={list._id}>{list.username}</option>)}
          </Select>
        )
        : null}

    </Box>
    <GroupButtons onClick={onClick} axiosData={axiosData} />

  </Box>

);

export default FormDashBoard;
