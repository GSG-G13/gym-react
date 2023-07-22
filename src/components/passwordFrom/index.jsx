import {
  Box, Button, Input, Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

const ForgetPasswordComp = ({ setShowBox, showBox }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const changePassword = async () => {
    try {
      if (userData.email === '' || userData.password === '') {
        return;
      }
      await axios.put('/api/users/forget', userData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
      px: 10,
      py: 14,

    }}
    >
      <Typography
        sx={{
          textTransform: 'capitalize',
        }}
        variant="h2"
      >
        reset your password

      </Typography>

      <Input
        placeholder="type your email here"
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        sx={{
          color: '#fff',
          fontSize: 14,
          width: 360,
          pl: 2,
        }}
      />

      <Input
        placeholder="type your new password here"
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        sx={{
          color: '#fff',
          fontSize: 14,
          width: 360,
          pl: 2,
        }}
      />

      <Button
        sx={{
          color: '#fff',
          backgroundColor: 'colors.darkBlue',
          p: '10px 50px',
        }}
        type="submit"
        onClick={changePassword}
      >
        submit

      </Button>
      <CancelIcon
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          color: 'rgb(255, 70, 1)',
          cursor: 'pointer',
        }}
        onClick={() => setShowBox(!showBox)}
      />
    </Box>
  );
};

export default ForgetPasswordComp;
