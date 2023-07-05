import React from 'react';

import {
  Box,
  FormControl, IconButton, InputAdornment, OutlinedInput,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DashboardNewPopUp from '../newPopUpComp';

const SearchDashboard = ({
  btnText, userInfo, setStates, axiosData,
}) => (
  <Box width="100%" sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
    <FormControl sx={{ m: 1, height: '52px', flex: 0.8 }} variant="outlined">
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
    <DashboardNewPopUp
      userInfo={userInfo}
      setStates={setStates}
      axiosData={axiosData}
    >
      {btnText}
    </DashboardNewPopUp>

  </Box>
);

export default SearchDashboard;
