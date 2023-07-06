/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({ rows, columns }) => (
  <Box width="100%">
    <DataGrid
      rows={rows}
      columns={columns}
      getRowId={(row) => row._id}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
);
export default Table;
