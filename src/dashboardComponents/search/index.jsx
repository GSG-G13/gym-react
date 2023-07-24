import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const SearchInpDash = ({ data, handleClick }) => (

  <Stack spacing={2} sx={{ width: 800 }}>
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

// <FormControl sx={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#fff', flex: 0.8 }}>
//   <InputLabel sx={{ fontSize: 12, color: '#fff' }} htmlFor="my-input">search</InputLabel>
//   <Input
//     sx={{
//       fontSize: 15,
//       color: '#fff',
//       px: 2,
//     }}
//     id="my-input"
//     aria-describedby="my-helper-text"
//   />
// </FormControl>

// export default function FreeSolo() {
//   return (
//     <Stack spacing={2} sx={{ width: 300 }}>
//       <Autocomplete
//         id="free-solo-demo"
//         freeSolo
//         options={top100Films.map((option) => option.title)}
//         renderInput={(params) => <TextField {...params} label="freeSolo" />}
//       />
//       <Autocomplete
//         freeSolo
//         id="free-solo-2-demo"
//         disableClearable
//         options={top100Films.map((option) => option.title)}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="Search input"
//             InputProps={{
//               ...params.InputProps,
//               type: 'search',
//             }}
//           />
//         )}
//       />
//     </Stack>
//   );
// }
