import React from 'react';
import { Box } from '@mui/material';
import Message from '../message';

const userMessage = [{
  image: 'https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg',
  username: 'ali',
  message: 'hello my friend',
  time: '20:30',
},
{
  image: 'https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg',
  username: 'john',
  message: 'hello my friend adfadfadfadfad',
  time: '20:30',
},
{
  image: 'https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg',
  username: 'unknown',
  message: 'hello my friend',
  time: '20:30',
},
{
  image: 'https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg',
  username: 'unknown',
  message: 'hello my friend',
  time: '20:30',
},
];
const MessageLists = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }} border="1px solid #ccc" width={774}>
    {userMessage.map((message) => <Message message={message} />)}
  </Box>
);

export default MessageLists;
