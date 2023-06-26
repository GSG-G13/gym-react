import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { passwordIcon, userIcon } from '../../utilize/icons';
import ButtonComponent from '../button/Button';
import InputComp from '../inputfield';

const FormWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 2rem;
text-align: center;


`;

const InputContainer = styled.div`
  width: 450px;
  display: flex;
flex-direction: column;
justify-content: center;


`;

const SignInComp = () => (
  <Box>
    <FormWrapper>
      <InputContainer>
        <Typography variant="h1" sx={{ marginBottom: '3.125rem', fontWeight: '700' }}>
          Login
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <InputComp name="Email" icon={userIcon} />
          <InputComp name="Password" icon={passwordIcon} />
        </Box>
        <Typography my={2} variant="h5" textAlign="start">
          I do not have an account ? Sign up
        </Typography>
        <Typography mb={1} variant="h6" textAlign="start">
          Forgot password?

        </Typography>

        <ButtonComponent variant="contained" color="#002B5B">
          Sign in
        </ButtonComponent>
      </InputContainer>
    </FormWrapper>
  </Box>
);

export default SignInComp;
