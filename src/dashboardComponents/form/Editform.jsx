/* eslint-disable no-underscore-dangle */
import {
  Box, FormControl, Input, InputLabel, Typography,
} from '@mui/material';
import React from 'react';
import { DeleteButton, EditButton } from '../button';

const EditForm = ({
  setShowForm, showForm, axiosData, setState, head, values, state,title
}) => {
  const arrValues = Object.values(values).filter((item, index) => index !== 0);
  return (
    <Box>
      <Typography color="#fff" textAlign="center">{title}</Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,

      }}
      >
        {head.map((inp, index) => (
          <FormControl key={inp}>
            <InputLabel sx={{ fontSize: 12, color: '#fff' }} htmlFor={inp}>{inp}</InputLabel>
            <Input
              value={state[index] || arrValues[index]}
              onChange={(e) => setState(e, inp)}
              sx={{
                fontSize: 15,
                color: '#fff',
                borderBottom: '1px solid #ccc',
              }}
              id={inp}
              aria-describedby="my-helper-text"
            />
          </FormControl>
        ))}
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 5,
        mt: 3,
      }}
      >
        <EditButton text="Update User" axiosData={axiosData} />
        <DeleteButton
          text="Cancel"
          setShowForm={setShowForm}
          showForm={showForm}
        />
      </Box>
    </Box>
  );
};

export default EditForm;
