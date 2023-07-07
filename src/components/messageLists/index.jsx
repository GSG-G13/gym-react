import React from 'react';
import { Box } from '@mui/material';
import Message from '../message';

const MessageLists = ({ messages }) => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    maxHeight: '70vh',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': { display: 'none' },
  }}
  >
    {messages.map((message) => <Message message={message} />)}
  </Box>
);

export default MessageLists;
