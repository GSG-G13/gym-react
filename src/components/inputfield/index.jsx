import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

const InputComp = (props) => {
  const {
    name, icon, value, onChange, filedName, error, type, setFunction,
  } = props;
  return (
    <TextField
      required
      type={type || 'text'}
      error={error}
      helperText={error}
      placeholder={name}
      value={value}
      onChange={(e) => {
        onChange(e, filedName);
      }}
      sx={{
        borderRadius: '0px',
        borderColor: '#FF4601',
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#fff',
          borderRadius: '0.625rem',
          padding: '0.78125rem',
          paddingBottom: '2rem',
          position: 'absolute',
          width: '100%',

        },
        '& .Mui-error': {
          paddingTop: '8px',
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            sx={{
              color: '#FF4601',
            }}
          >
            {icon}
          </InputAdornment>
        ),
        inputProps: {
          style: { color: '#fff', fontWeight: '500', fontSize: '13px' },
        },
      }}
    />
  );
};

export default InputComp;
