import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import InputComp from '../inputfield/inputfield';
import { passwordIcon, userIcon } from '../../utilize/icons';
import ButtonComponent from '../button/Button';

const FormWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 2rem;
text-align: center;
`;

const StyledInputComp = styled(InputComp)`
  padding-bottom: 2rem;
  color: red;

`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin:  auto;
`;

const SignInComp = () => (
  <Box mt={9} height="67vh">
    <FormWrapper>
      <InputContainer>
        <Typography variant="h1" sx={{ marginBottom: '3.125rem', fontWeight: '700' }}>
          Sign In
        </Typography>
        <Typography variant="h4" sx={{ marginBottom: '1.875rem', fontWeight: '500' }}>
          Sign in and start managing your candidates!
        </Typography>
        <StyledInputComp name="Email" icon={userIcon} />
        <StyledInputComp name="Password" icon={passwordIcon} />
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
        <ButtonComponent variant="contained" color="#002B5B">
          Sign in
        </ButtonComponent>
      </InputContainer>
    </FormWrapper>
  </Box>
);

export default SignInComp;
