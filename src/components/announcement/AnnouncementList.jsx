import { Box } from '@mui/material';
import React from 'react';
import Announcement from './Announcement';

const list = ['Abeer', 'Adhem', 'Ahmed', 'Heleena'];
const AnnouncementList = () => (
  <Box>
    {list.map((announce) => <Announcement announce={announce} />)}
  </Box>
);

export default AnnouncementList;
