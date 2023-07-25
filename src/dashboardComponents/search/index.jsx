import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const SearchInpDash = ({ data, handleClick }) => (

  <Stack spacing={2} sx={{ width: 800, color: 'white' }}>
    <Autocomplete
      sx={{ backgroundColor: '#231e1e', color: 'white', flex: 0.8 }}
      freeSolo
      id="free-solo-2-demo"
      onChange={(event, newValue) => {
        handleClick({ text: newValue });
      }}
      onInputChange={(event, newInputValue) => {
        if (!newInputValue) {
          handleClick({ text: newInputValue });
        }
      }}
      disableClearable
      options={data?.map((option) => option.username) || []}
      renderInput={(params) => (
        <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            type: 'search',

          }}
          sx={{
            '& label': {
              color: '#FF4601',
            },
            '& label.Mui-focused': {
              color: 'white',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#FF4601',
            },
            '& .MuiOutlinedInput-root': {
              color: 'white',
            },
            // eslint-disable-next-line no-dupe-keys
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                color: 'white',
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FF4601',
              },
            },
          }}
        />
      )}
    />
  </Stack>
);
export default SearchInpDash;
