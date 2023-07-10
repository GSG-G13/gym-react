import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import { SignInComp } from '../../../components';
import { ReactComponent as Login } from '../../../assets/login.svg';
import ForgetPasswordComp from '../../../components/passwordFrom';

const SignIn = () => {
  const [showBox, setShowBox] = useState(false);
  return (
    <Box>
      <Container>
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
          <Login style={{ width: '50%' }} />

          <SignInComp setShowBox={setShowBox} showBox={showBox} />
        </Box>
      </Container>
      <Box
        display={showBox ? 'block' : 'none'}
        border="1px solid red"
        sx={{
          width: '60%',
          m: 'auto',
          height: 500,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}
      >
        <ForgetPasswordComp setShowBox={setShowBox} showBox={showBox} />
      </Box>
    </Box>
  );
};

export default SignIn;
