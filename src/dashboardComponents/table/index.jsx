/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const DashTable = ({
  array, userInfo, deleteFunction, setEditShowForm, showEditForm, getData, updateSubscription,
}) => (

  <Table size="small" aria-label="a dense table">
    <TableHead sx={{ height: '50px' }}>
      <TableRow>
        {userInfo?.map((head) => <TableCell key={head} sx={{ color: '#fff', textTransform: 'capitalize' }} align="center">{head}</TableCell>)}
        <TableCell sx={{ color: '#fff', textTransform: 'capitalize' }} align="center">remove</TableCell>
        <TableCell sx={{ color: '#fff', textTransform: 'capitalize' }} align="center">edit</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {array?.map((row) => (
        <TableRow sx={{ width: '100%' }} key={row._id}>
          {userInfo?.map((cell) => <TableCell key={cell} sx={{ color: '#fff', fontSize: 13 }} align="center">{row[cell]}</TableCell>)}
          <TableCell sx={{ color: '#fff' }} align="center">
            <DeleteIcon
              onClick={() => deleteFunction(row._id)}
              sx={{ fontSize: 19, cursor: 'pointer', color: 'red' }}
            />

          </TableCell>
          <TableCell sx={{ color: '#fff' }} align="center">
            {updateSubscription ? (
              <EditIcon
                onClick={() => updateSubscription(row._id)}
                sx={{ fontSize: 19, cursor: 'pointer', color: 'blue' }}
              />
            )
              : (
                <EditIcon
                  onClick={() => setEditShowForm(!showEditForm) || getData(row._id)}
                  sx={{ fontSize: 19, cursor: 'pointer', color: 'blue' }}
                />
              )}

          </TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>

);
export default DashTable;
