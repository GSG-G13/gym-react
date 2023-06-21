import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

const InputComp = (props) => {
  const {
    name, icon, width, height,
  } = props;

  return (
    <div>
      <TextField
        required
        placeholder={name}
        sx={{
          borderRadius: '0px',
          borderColor: '#002B5B',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#002B5B',
            borderRadius: '0.625rem',
            padding: '0.78125rem',
            width,
            height,
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ color: '#002B5B', marginLeft: '0.3125rem' }}> 
              {icon}
            </InputAdornment>
          ),
          inputProps: {
            style: { color: '#002B5B', fontWeight: '600' },
          },
        }}
      />
    </div>
  );
};

export default InputComp;
