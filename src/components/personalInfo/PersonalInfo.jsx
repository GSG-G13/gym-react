import * as React from 'react';
import { Box, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import ButtonComponent from '../button/Button';

const PersonalInfo = ({ userData }) => (

  <Box
    component="div"
    sx={{
      width: '90%',
      alignSelf: 'start',
      height: '250px',
      display: 'flex',
      alignItems: 'center',
      gap: '30px',
      m: '0 auto',
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

      <Typography variant="h4" sx={{ paddingBottom: '8px' }}>
        {userData?.username}
        {' '}
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography variant="h5" sx={{ paddingBottom: '8px' }}>
          {' '}
          {userData?.weight}
          {' '}
          KG
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <MailIcon sx={{ paddingRight: '6px', fontSize: '20px' }} />
        <Typography variant="h5" sx={{ paddingBottom: '20px' }}>{userData?.email}</Typography>
      </Box>
      <ButtonComponent
        variant="contained"
        color="colors.darkBlue"
      >
        <Link to="/setting" style={{ textDecoration: 'none', color: '#fff' }}>Profile Info</Link>

      </ButtonComponent>
    </Box>

  </Box>
);

export default PersonalInfo;
