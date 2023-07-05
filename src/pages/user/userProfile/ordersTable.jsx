import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';

const OrderTable = ({ ordersData }) => (

  <Table sx={{ height: '300px' }} size="small" aria-label="a dense table">
    <TableHead sx={{ backgroundColor: '#E4DCCF', height: '70px' }}>
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell>image</TableCell>
        <TableCell>price</TableCell>
        <TableCell>delete</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {ordersData?.map((row) => (
        // eslint-disable-next-line no-underscore-dangle
        <TableRow key={row._id}>
          <TableCell component="th" scope="row">
            {row.productId.title}
          </TableCell>

          <TableCell>{row.productId.image}</TableCell>
          <TableCell>{row.productId.price}</TableCell>
          <TableCell><DeleteIcon /></TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>

);
export default OrderTable;
