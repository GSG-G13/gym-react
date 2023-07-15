import React from 'react';
import { Box } from '@mui/material';
import Message from '../message';

const MessageLists = ({ messages }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      maxHeight: '70vh',
      overflowY: 'scroll',
    }}
  >
    {messages.map((message) => (
      // eslint-disable-next-line no-underscore-dangle
      <Message key={message._id} message={message} />
    ))}
  </Box>
);

export default MessageLists;
