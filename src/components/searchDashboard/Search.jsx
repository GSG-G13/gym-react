import React from 'react';
import {
  FormControl, IconButton, InputAdornment, OutlinedInput,
} from '@mui/material';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import ButtonComponent from '../button/Button';

const SearchDashboard = () => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <FormControl sx={{ m: 1, width: '851px', height: '52px' }} variant="outlined">
      <OutlinedInput
        sx={{
          backgroundColor: '#F6F6FB',
          '& fieldset': { border: 0 },
          '& .MuiOutlinedInput-root': {
            '& > fieldset': {
              border: 'none',
            },
          },
        }}
        placeholder="Search..."
        id="outlined-adornment"
        type="text"
        endAdornment={(
          <InputAdornment position="end">
            <IconButton edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
                  )}
      />
    </FormControl>
    <ButtonComponent
      color="colors.darkBlue"
      widthBtn="169px"
      heightBtn="53px"
    >
      Search
    </ButtonComponent>
  </Box>
);

export default SearchDashboard;
