import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import InputComp from '../inputfield/inputfield';
import { passwordIcon, userIcon } from '../../utilize/icons';
import ButtonComponent from '../button/Button';
import { ReactComponent as Login } from '../../assets/login.svg';

const FormWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 2rem;
text-align: center;
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin:  auto;
`;

const SignInComp = () => (
  <Box mt={9} height="67vh">
    <FormWrapper>
      <Login />
      <InputContainer>
        <Typography variant="h1" sx={{ marginBottom: '3.125rem', fontWeight: '700' }}>
          Login
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <InputComp name="Email" icon={userIcon} />
          <InputComp name="Password" icon={passwordIcon} />
        </Box>
        <Typography sx={{
          marginBottom: '1.0rem',
          marginTop: '1.0rem',
          fontSize: '.7rem',
          color: '#002B5B',
          position: 'relative',
          left: '6.5rem',
          top: '.6rem',
        }}
        >
          Forgot password?

        </Typography>
        <Typography sx={{
          marginBottom: '1.0rem',
          marginTop: '1.0rem',
          fontSize: '.7rem',
          color: '#002B5B',
          position: 'relative',
          left: '6.5rem',
          top: '.6rem',
        }}
        >
          I do not have an account ? Sign up
        </Typography>
        <ButtonComponent variant="contained" color="#002B5B">
          Sign in
        </ButtonComponent>
      </InputContainer>
    </FormWrapper>
  </Box>
);

export default SignInComp;
