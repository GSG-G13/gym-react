import { Button } from '@mui/material';
import React from 'react';

const DeleteButton = ({ text, setShowForm, showForm }) => (
  <Button
    variant="contained"
    sx={{ backgroundColor: 'red' }}
    onClick={() => setShowForm(!showForm)}
  >
    {text}
  </Button>
);

export default DeleteButton;
