import React, { useContext } from 'react';
import { ButtonGroup } from '@mui/material';
import ButtonComponent from '../button/Button';
import FormContext from '../../context';

const GroupButtons = ({ onClick }) => {
  const { editBtnText, deleteBtnText } = useContext(FormContext);
  return (
    <ButtonGroup sx={{ display: 'flex', justifyContent: 'center', gap: 10 }} variant="outlined" aria-label="outlined button group">
      <ButtonComponent color="colors.darkBlue">Add Announcement</ButtonComponent>
      <ButtonComponent color="colors.error" secondOnClick={onClick}>Cancel</ButtonComponent>
    </ButtonGroup>
  );
};

export default GroupButtons;
