import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import ButtonComponent from '../button/Button';

const PersonalInfo = () => (

  <Box
    component="div"
    sx={{
      p: 2,
      width: '500px',
      height: '250px',
      display: 'flex',
      justifyContent: 'space-around',

    }}
  >
    <Box component="div" sx={{ borderRadius: '50%' }}>
      <img
        src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
        width="180px"
        height="180px"
        alt="pic-profile"
      />
    </Box>
    <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>

      <Typography variant="h5" sx={{ paddingBottom: '8px' }}>Eng.Fadi </Typography>
      <Box sx={{ display: 'flex' }}>
        <LocalPhoneIcon sx={{ paddingRight: '6px', fontSize: '20px' }} />
        <Typography variant="h6" sx={{ paddingBottom: '8px' }}> +123-546-954</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <MailIcon sx={{ paddingRight: '6px', fontSize: '20px' }} />
        <Typography variant="h6" sx={{ paddingBottom: '20px' }}> hell2023@gmail.com</Typography>
      </Box>
      <ButtonComponent
        variant="contained"
        color="colors.darkBlue"
      >
        Profile Info

      </ButtonComponent>
    </Box>

  </Box>
);

export default PersonalInfo;
