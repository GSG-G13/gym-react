import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

const InputComp = (props) => {
  const { name, icon, type } = props;

  let height;
  let width;
  if (type === 'signin') {
    height = '80.69px';
    width = '671.76px';
  } else {
    height = '58px';
    width = '358px';
  }

  return (
    <div>
      <TextField
        required
        placeholder={name}
        sx={{
          height: { height },
          width: { width },
          borderRadius: '0px', // Change the radius value as needed
          borderColor: '#002B5B', // Change the color value as needed
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#002B5B', // Change the color value as needed
            borderRadius: '10px',

          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ color: '#002B5B', marginLeft: '5px' }}>
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
