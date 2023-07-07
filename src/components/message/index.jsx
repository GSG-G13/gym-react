import { Box, Typography, Divider } from '@mui/material';
import React from 'react';

const Message = ({ message }) => (
  <Box
    p={2}
    sx={{
      alignSelf: message.username === 'john' ? 'end' : 'start', display: 'flex', gap: 2, width: 250,
    }}
  >
    <img width={40} height={40} style={{ borderRadius: '50%', alignSelf: 'end', display: message.username === 'john' ? 'none' : 'block' }} src={message.image} alt="person" />

    <Box>
      <Typography variant="h5" textAlign={message.username === 'john' ? 'end' : 'start'}>{message.username === 'john' ? 'you' : 'john'}</Typography>
      <Divider />
      <Typography borderRadius={3} p={2} bgcolor="#EEF1F4" my={1} variant="body2">{message.message}</Typography>
      <Typography variant="h6">{message.time}</Typography>
    </Box>
  </Box>
);

export default Message;
