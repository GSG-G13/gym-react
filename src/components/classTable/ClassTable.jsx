import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const rows = [
  { day: 'Saturday', time: 8 - 10 },
  { day: 'Monday', time: 10 - 12 },
  { day: 'Wednesday', time: 12 - 2 },

];

const ClassTable = () => (

  <Table sx={{ width: '400px', height: '300px' }} size="small" aria-label="a dense table">
    <TableHead sx={{ backgroundColor: '#FF4601', height: '70px' }}>
      <TableRow>
        <TableCell sx={{ color: '#fff' }}>Days</TableCell>
        <TableCell align="right" sx={{ color: '#fff' }}>Times</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow>
          <TableCell component="th" scope="row" sx={{ color: '#fff' }}>
            {row.day}
          </TableCell>

          <TableCell align="right" sx={{ color: '#fff' }}>{row.time}</TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>

);
export default ClassTable;
