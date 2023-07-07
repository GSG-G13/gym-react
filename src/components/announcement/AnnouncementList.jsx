import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Announcement from './Announcement';

const AnnouncementList = () => {
  const [announcement, setAnnouncement] = useState([]);
  console.log(announcement);
  const getAnnouncement = async () => {
    const response = await axios.get('/api/announcements');
    setAnnouncement(response.data.announcements);
  };

  useEffect(() => {
    getAnnouncement();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} my={10}>
      {announcement?.map((announce) => <Announcement announce={announce} />)}
    </Box>
  );
};

export default AnnouncementList;
