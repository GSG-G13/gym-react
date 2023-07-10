import { useReducer, useState } from 'react';
import axios from 'axios';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputComp from '../inputfield';
import ButtonComponent from '../button/Button';
import { CompWrapper, ButtonContainer, FieldColumn } from './styledComps';
import {
  passwordIcon,
  userIcon,
  genderIcon,
  weightIcon,
  emailIcon,
  birthDataIcon,
  heightIcon,
} from '../../utilize/icons';

import Modal from '../modal/index';

import validationSchema from '../../validation/signupValidation';

const initialState = {
  username: '',
  age: '',
  email: '',
  gender: '',
  height: '',
  weight: '',
  goalweight: '',
  password: '',
  confirmPassword: '',
};

const reducer = (state, action) => ({
  ...state,
  [action.filedName]: action.value,
});

const SignupComp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const handleChange = (e, filedName) => {
    const { value } = e.target;
    dispatch({
      filedName,
      value,
    });
  };

  const handleSignUp = async () => {
    const response = await axios.post('/api/users/signup', state);
    if (response.status === 201) {
      setOpenModal(true);
    }
  };

  const handleSubmit = () => {
    validationSchema
      .validate(state, { abortEarly: false })
      .then(() => {
        handleSignUp();
      })
      .catch((err) => {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        console.log({ validationErrors });
        setErrors(validationErrors);
      });
  };
  return (
    <>
      <CompWrapper>
        <Box>
          <Typography
            variant="h1"
            sx={{
              marginBottom: '2rem',
              fontWeight: '600',
              textAlign: 'center',
              color: '#FF4601',
            }}
          >
            Sign Up
          </Typography>

          <FieldColumn>
            <InputComp
              name="Username"
              icon={userIcon}
              value={state.username}
              onChange={handleChange}
              filedName="username"
              error={errors.username}
            />
            <InputComp
              name="Age"
              icon={birthDataIcon}
              value={state.age}
              onChange={handleChange}
              filedName="age"
              type="number"
              error={errors.age}
            />
            <InputComp
              name="Email"
              icon={emailIcon}
              value={state.email}
              onChange={handleChange}
              filedName="email"
              type="email"
              error={errors.email}
            />
            <InputComp
              name="Gender"
              icon={genderIcon}
              value={state.gender}
              onChange={handleChange}
              filedName="gender"
              error={errors.gender}

            />
            <InputComp
              name="Height"
              icon={heightIcon}
              value={state.height}
              onChange={handleChange}
              filedName="height"
              type="number"
              error={errors.height}
            />
            <InputComp
              name="Weight"
              icon={weightIcon}
              value={state.weight}
              onChange={handleChange}
              filedName="weight"
              type="number"
              error={errors.weight}
            />
            <InputComp
              name="goalweight"
              icon={weightIcon}
              value={state.goalweight}
              onChange={handleChange}
              filedName="goalweight"
              type="number"
              error={errors.goalweight}
            />
            <InputComp
              name="Password"
              icon={passwordIcon}
              value={state.password}
              onChange={handleChange}
              filedName="password"
              type="password"
              error={errors.password}
            />
            <InputComp
              name="Confirm Password"
              icon={passwordIcon}
              value={state.confirmPassword}
              onChange={handleChange}
              type="password"
              filedName="confirmPassword"
              error={errors.confirmPassword}
            />
          </FieldColumn>
        </Box>

        <ButtonContainer>
          <Box>
            <ButtonComponent
              variant="contained"
              color="#FF4601"
              onClick={handleSubmit}
              width="300px"
            >
              Sign up
            </ButtonComponent>
          </Box>
        </ButtonContainer>
      </CompWrapper>
      <Modal open={openModal} setOpen={setOpenModal}>
        <div
          style={{
            padding: 24,
            background: '#E4DCCF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <CheckCircleIcon style={{ fontSize: '48px', color: '#002B5B' }} />
          <strong style={{ fontSize: '20px', marginTop: '16px' }}>Thank you!</strong>
          <p style={{ fontSize: '16px', margin: '8px 0' }}>
            Your details have been successfully submitted. Thanks!
          </p>
          <span style={{ color: '#002B5B', marginTop: '8px' }}>
            Have a fun at our community!
          </span>
          <Link
            to="/"
            style={{
              color: '#002B5B',
              textDecoration: 'none',
              marginTop: '8px',
              fontWeight: 'bold',
            }}
          >
            Click here to Srart your Journey
          </Link>
        </div>

      </Modal>
    </>
  );
};

export default SignupComp;
