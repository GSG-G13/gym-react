/* eslint-disable no-underscore-dangle */
import { Box } from '@mui/material';
import ScrollableFeed from 'react-scrollable-feed';
import Message from '../message';

const MessageLists = ({ messages }) => (
  <Box
    sx={{

      maxHeight: '70vh',
      overflowY: 'scroll',

    }}
  >
    <ScrollableFeed>

      {messages.map((message) => (

        <Message key={message._id} message={message} />

      ))}
    </ScrollableFeed>

  </Box>
);

export default MessageLists;
