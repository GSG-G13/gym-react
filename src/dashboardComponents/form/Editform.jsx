/* eslint-disable no-underscore-dangle */
import {
  Box, FormControl, Input, InputLabel, Select, Typography, MenuItem,
} from '@mui/material';
import React from 'react';
import { DeleteButton, EditButton } from '../button';

const EditForm = ({
  setShowForm, showForm, axiosData, setState, head, values, state, selectData,
  setSelectDataId, selectDataId,
}) => (
  <Box>
    <Typography color="#fff" textAlign="center">Edit User</Typography>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 3,

    }}
    >
      {head.map((inp) => (
        <FormControl key={inp}>
          <InputLabel sx={{ fontSize: 12, color: '#fff' }} htmlFor={inp}>{inp}</InputLabel>
          <Input
            value={state[inp] ? state[inp] : values[inp]}
            onChange={(e) => setState({ ...state, [inp]: e.target.value })}
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

      {selectData && (
        <FormControl>
          <InputLabel sx={{ fontSize: 14, color: '#fff' }} htmlFor="category-select">
            Category
          </InputLabel>

          <Select
            id="category-select"
            value={selectDataId}
            onChange={(e) => {
              setSelectDataId(e.target.value);
              setState({ ...state, trainerId: e.target.value });
            }}
            sx={{
              fontSize: 12, color: '#fff', border: '1px solid #ccc',
            }}
          >
            {selectData?.map((menuData) => (
              <MenuItem key={menuData._id} value={menuData._id}>
                {menuData.categoryName || menuData.username}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
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

export default EditForm;
