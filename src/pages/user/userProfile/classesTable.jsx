import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';

const ClassTable = ({ classData }) => (

  <Table sx={{ height: '100px' }} size="small" aria-label="a dense table">
    <TableHead sx={{ height: '50px' }}>
      <TableRow>
        <TableCell sx={{ color: '#FF4601', textTransform: 'capitalize' }} align="center">className</TableCell>
        <TableCell sx={{ color: '#FF4601', textTransform: 'capitalize' }} align="center">status</TableCell>
        <TableCell sx={{ color: '#FF4601', textTransform: 'capitalize' }} align="center">remove</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {classData?.map((row) => (
        <TableRow key={row.id}>
          <TableCell sx={{ color: '#fff' }} align="center" scope="row">
            {row.classId.className}
          </TableCell>

          <TableCell sx={{ color: '#fff' }} align="center">{row.status}</TableCell>
          <TableCell sx={{ color: '#fff' }} align="center"><DeleteIcon /></TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>

);
export default ClassTable;
