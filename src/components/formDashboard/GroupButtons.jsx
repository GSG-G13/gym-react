import React from 'react';
import { ButtonGroup } from '@mui/material';
import ButtonComponent from '../button/Button';

const GroupButtons = () => (
  <ButtonGroup sx={{ display: 'flex', justifyContent: 'center', gap: 10 }} variant="outlined" aria-label="outlined button group">
    <ButtonComponent color="colors.darkBlue">Create</ButtonComponent>
    <ButtonComponent color="colors.error">Cancel</ButtonComponent>
  </ButtonGroup>
);

export default GroupButtons;
