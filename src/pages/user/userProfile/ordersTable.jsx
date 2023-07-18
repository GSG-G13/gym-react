/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';

const OrderTable = ({ ordersData, deleteOrder }) => (

  <Table sx={{ height: '150px' }} size="small" aria-label="a dense table">
    <TableHead sx={{ height: '50px' }}>
      <TableRow>
        <TableCell sx={{ color: '#FF4601', textTransform: 'capitalize' }} align="center">Title</TableCell>
        <TableCell sx={{ color: '#FF4601', textTransform: 'capitalize' }} align="center">image</TableCell>
        <TableCell sx={{ color: '#FF4601', textTransform: 'capitalize' }} align="center">price</TableCell>
        <TableCell sx={{ color: '#FF4601', textTransform: 'capitalize' }} align="center">delete</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {ordersData?.map((row) => (
        // eslint-disable-next-line no-underscore-dangle
        <TableRow key={row._id}>
          <TableCell sx={{ color: '#fff' }} align="center" scope="row">
            {row.productId.title}
          </TableCell>

          <TableCell sx={{ color: '#fff' }} align="center">{row.productId.image}</TableCell>
          <TableCell sx={{ color: '#fff' }} align="center">{row.productId.price}</TableCell>
          <TableCell sx={{ color: '#fff' }} align="center"><DeleteIcon onClick={() => deleteOrder(row._id)} /></TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>

);
export default OrderTable;
