import { Box, Typography } from '@mui/material';
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
    <Box my={15}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{
          borderWidth: '10px 10px',
          borderColor: '#ff4601 transparent #ff4601 #ff4601 ',
          borderStyle: 'solid',
          pl: '50px',
        }}
        />
        <Typography variant="h2" sx={{ color: '#ff4601', fontWeight: '700', ml: '10px' }}>Announcements</Typography>
      </Box>

      <Box sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2,
      }}
      >
        {announcement?.map((announce) => <Announcement announce={announce} />)}
      </Box>
    </Box>
  );
};

export default AnnouncementList;
