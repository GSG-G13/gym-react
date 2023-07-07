import { Box, Typography, Divider } from '@mui/material';
import React from 'react';

const Message = ({ message }) => {
  console.log(message);
  const userData = JSON.parse(localStorage.getItem('userData'));
  console.log(userData);
  return (
    <Box
      p={2}
      sx={{
        alignSelf: message.username === userData.username ? 'end' : 'start',
        display: 'flex',
        gap: 2,
        maxWidth: 400,
      }}
    >
      <img width={40} height={40} style={{ borderRadius: '50%', alignSelf: 'end', display: message.image ? 'block' : 'none' }} src={message.image} alt="person" />

      <Box>
        <Typography
          variant="h5"
          textAlign={message.username === userData.username ? 'start' : 'end'}
        >
          {message.username === userData.username ? 'you' : message.username}

        </Typography>
        <Divider />
        <Typography
          borderRadius={5}
          p="10px 20px"
          bgcolor={message.username === userData.username ? '#EEF1F4' : 'blue'}
          my={1}
          variant="body2"
          color={message.username === userData.username ? 'black' : '#fff'}
          fontWeight={600}
        >
          {message.message}

        </Typography>
        <Typography variant="h6">
          {message.time}
          {' '}
          13:30
        </Typography>
      </Box>
    </Box>
  );
};

export default Message;
