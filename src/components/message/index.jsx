import { Box, Typography, Divider } from '@mui/material';
import React from 'react';
import useAuth from '../../hook/useAuth';

const Message = ({ message }) => {
  const { user: userData } = useAuth();

  if (!userData) return null;

  return (
    <Box
      p={2}
      sx={{
        display: 'flex',
        justifyContent: message.username === userData.username ? 'right' : 'eft',
        gap: 2,
        maxWidth: '100%',
      }}
    >
      <img
        width={40}
        height={40}
        style={{
          borderRadius: '50%',
          alignSelf: 'end',
          display: message.image ? 'block' : 'none',
        }}
        src={message.image}
        alt="person"
      />

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
          {message.createdAt.split(':')[0].slice(0, 10).replaceAll('-', '/')}

        </Typography>
      </Box>
    </Box>
  );
};

export default Message;
