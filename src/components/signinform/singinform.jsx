import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import InputComp from '../inputfield/inputfield';
import { passwordIcon, userIcon } from '../../utilize/icons';
import ButtonComponent from '../button/Button';
import './styles.css';

const FormWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 2rem;
height: 12rem;
width: 90rem;
right: 20rem;
margin-bottom: 8rem;


`;
const SignInComp = () => {
  console.log('react');

  return (
    <div>
      <Typography variant="h1" sx={{ marginBottom: '3.125rem' }}>
        Sign In
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: '1.875rem' }}>
        Sign in and start managing your candidates!
      </Typography>
      <FormWrapper>
        <InputComp name="Email" icon={userIcon} width="41.9375rem" height="5.043125rem" />
        <InputComp name="Password" icon={passwordIcon} width="41.9375rem" height="5.043125rem" />
      </FormWrapper>
      <Typography variant="h6" sx={{ marginBottom: '1.875rem' }}>Forgot password?</Typography>
      <ButtonComponent variant="contained" width="41.9375rem" color="#002B5B" height="6.375rem">
        <h2>Sign in</h2>
      </ButtonComponent>
    </div>
  );
};

export default SignInComp;
