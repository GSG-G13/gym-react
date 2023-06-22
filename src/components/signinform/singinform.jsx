import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import InputComp from '../inputfield/inputfield';
import { passwordIcon, userIcon } from '../../utilize/icons';
import ButtonComponent from '../button/Button';

const FormWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 2rem;
right: 20rem;
margin-bottom: 8rem;
margin-top; 8rem;
text-align: center;
`;

const StyledInputComp = styled(InputComp)`
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  color: red;

`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin:  auto;
`;
const ButtonContainer = styled.div`
max-width: 500px;
`;

const SignInComp = () => (
  <FormWrapper>
    <Typography variant="h1" sx={{ marginBottom: '3.125rem' }}>
      Sign In
    </Typography>
    <Typography variant="h2" sx={{ marginBottom: '1.875rem' }}>
      Sign in and start managing your candidates!
    </Typography>
    <InputContainer>
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
      <ButtonContainer>

        <ButtonComponent variant="contained" color="#002B5B">
          Sign in
        </ButtonComponent>
      </ButtonContainer>
    </InputContainer>
  </FormWrapper>
);

export default SignInComp;
