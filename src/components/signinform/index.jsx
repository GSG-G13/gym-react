/* eslint-disable consistent-return */
import React, { useReducer } from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { passwordIcon, userIcon } from '../../utilize/icons';
import InputComp from '../inputfield';

const FormWrapper = styled.form`
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

const initialState = {
  email: '',
  password: '',
};

const reducer = (state, action) => ({
  ...state,
  [action.filedName]: action.value,
});

const SignInComp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e, filedName) => {
    const { value } = e.target;
    dispatch({
      filedName,
      value,
    });
  };
  const navigate = useNavigate();
  const signIn = async (e) => {
    e.preventDefault();
    const { data, status } = await axios.post('/api/users/login', state);
    if (status === 200) {
      localStorage.setItem('userData', JSON.stringify(data.user));
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData.role === 'user') {
        return navigate('/');
      }
      return navigate('/dashboard');
    }
  };

  return (
    <Box>
      <FormWrapper onSubmit={(e) => signIn(e)}>
        <InputContainer>
          <Typography variant="h1" sx={{ marginBottom: '3.125rem', fontWeight: '600', color: '#FF4601' }}>
            Login
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <InputComp name="Email" type="text" filedName="email" value={state.email} icon={userIcon} onChange={handleChange} />
            <InputComp name="Password" type="password" filedName="password" value={state.password} icon={passwordIcon} onChange={handleChange} />
          </Box>
          <Typography my={2} variant="h5" textAlign="start">
            I do not have an account ?

            <Link to="/signup" style={{ textDecoration: 'none', color: '#FF4601', paddingLeft: '8px' }}> Sign up</Link>
          </Typography>
          <Typography mb={3} variant="h6" textAlign="start">
            Forgot password?

          </Typography>

          <button
            type="submit"
            style={{
              backgroundColor: '#FF4601', width: '450px', height: '40px', borderRadius: '5px', color: '#fff',
            }}
          >
            Sign in
          </button>
        </InputContainer>
      </FormWrapper>
    </Box>
  );
};

export default SignInComp;
