import { Button } from '@mui/material';
import React from 'react';

const EditButton = ({ text, axiosData }) => (
  <Button
    onClick={() => axiosData()}
    variant="contained"
  >
    {text}
  </Button>
);

export default EditButton;
