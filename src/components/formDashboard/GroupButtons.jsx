import React, { useContext } from 'react';
import { ButtonGroup } from '@mui/material';
import ButtonComponent from '../button/Button';
import FormContext from '../../context';

const GroupButtons = () => {
  const { editBtnText, deleteBtnText } = useContext(FormContext);
  return (
    <ButtonGroup sx={{ display: 'flex', justifyContent: 'center', gap: 10 }} variant="outlined" aria-label="outlined button group">
      <ButtonComponent color="colors.darkBlue">{editBtnText}</ButtonComponent>
      <ButtonComponent color="colors.error">{deleteBtnText}</ButtonComponent>
    </ButtonGroup>
  );
};

export default GroupButtons;
