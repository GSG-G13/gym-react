import React from 'react';
import { Box, Typography } from '@mui/material';
import InputForm from './InputForm';
import GroupButtons from './GroupButtons';

const FormDashBoard = ({
  userInfo, text, onClick, setStates, axiosData, filedName, value,
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
    </Box>
    <GroupButtons onClick={onClick} axiosData={axiosData} />

  </Box>

);

export default FormDashBoard;
