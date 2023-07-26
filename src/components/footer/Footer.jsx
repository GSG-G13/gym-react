import { Box, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => (

  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#3c353533',
      height: '160px',

    }}
  >
    <Box>
      <Typography variant="h6">
        Gaza, Alrimal, AlJondi St., Capital Mall Building,
        5th Floor, Room 501
      </Typography>
      <Box
        mt="20px"
        sx={{
          display: 'flex', justifyContent: 'space-around', width: '150px',
        }}
      >
        <FacebookIcon sx={{ px: '2px', color: '#FF4601' }} />
        <InstagramIcon sx={{ px: '2px', color: '#FF4601' }} />
        <YouTubeIcon sx={{ px: '2px', color: '#FF4601' }} />
        <LinkedInIcon sx={{ px: '2px', color: '#FF4601' }} />
      </Box>
    </Box>
    <Box>
      <Typography variant="h6">
        Non Copyrighted © 2023 Design and upload by rich technologies
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: '15px' }}>
        <LocalPhoneIcon sx={{ px: '2px', color: '#FF4601' }} />
        <Typography variant="h5">+972 595036287</Typography>

      </Box>
    </Box>
  </Box>
);

export default Footer;
