import { Button } from '@mui/material';
import React from 'react';

const AddButton = ({
  text, setShowForm, showForm, axiosData,
}) => (
  <Button
    variant="contained"
    sx={{ backgroundColor: 'orange' }}
    onClick={() => (text === 'Submit' ? axiosData() : setShowForm(!showForm))}
  >
    {text}
  </Button>
);

export default AddButton;
