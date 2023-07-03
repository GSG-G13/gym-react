import React, { useContext } from 'react';
import { ButtonGroup } from '@mui/material';
import axios from 'axios';
import ButtonComponent from '../button/Button';
import FormContext from '../../context';

const GroupButtons = ({ onClick, states }) => {
  console.log(states);
  const sendData = async () => {
    await axios.post('http://localhost:5050/api/announcements', {
      states,
    });
  };

  return (
    <ButtonGroup sx={{ display: 'flex', justifyContent: 'center', gap: 10 }} variant="outlined" aria-label="outlined button group">
      <ButtonComponent color="colors.darkBlue" secondOnClick={sendData}>Submit</ButtonComponent>
      <ButtonComponent color="colors.error" secondOnClick={onClick}>Cancel</ButtonComponent>
    </ButtonGroup>
  );
};

export default GroupButtons;
