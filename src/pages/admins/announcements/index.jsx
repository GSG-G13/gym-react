import { Box } from '@mui/material';
import React, { useState } from 'react';
import {
  AddButton, AddForm, DashTable, SearchInpDash,
} from '../../../dashboardComponents';

const AnnouncementDash = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Box mt={10}>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <SearchInpDash />
        <AddButton text="Add Announcement" setShowForm={setShowForm} showForm={showForm} />
      </Box>

      <Box mt={5}>
        <DashTable />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '40%',
          backgroundColor: '#111010',
          p: '20px 20px',
          transform: `translateX(${showForm ? 0 : '100%'})`,
          transition: '0.5s ease-in-out',
        }}
      >
        <AddForm setShowForm={setShowForm} showForm={showForm} />
      </Box>
    </Box>
  );
};

export default AnnouncementDash;
