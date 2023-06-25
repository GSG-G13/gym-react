import { Box } from '@mui/material';
import React from 'react';
import Announcement from './Announcement';

const list = ['Abeer', 'Adhem', 'Ahmed', 'Heleena'];
const AnnouncementList = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} my={10}>
    {list.map((announce) => <Announcement announce={announce} />)}
  </Box>
);

export default AnnouncementList;
