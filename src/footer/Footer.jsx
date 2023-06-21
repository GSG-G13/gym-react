import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => (

  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#E4DCCF',
    height: '163px',
    width: '100vw',
  }}
  >
    <Container>
    <Box>
      <Typography>
        Gaza, Alrimal, AlJondi St., Capital Mall Building,
        5th Floor, Room 501
      </Typography>
      <Box>
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
        <LinkedInIcon />
      </Box>
    </Box>
    <Box>
      <Typography variant="h5">
        Non Copyrighted © 2023 Design and upload by rich technologies
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LocalPhoneIcon />
        <Typography variant="h5">+972 595036287</Typography>

      </Box>
    </Box>
    </Container>
  </Box>
);

export default Footer;
