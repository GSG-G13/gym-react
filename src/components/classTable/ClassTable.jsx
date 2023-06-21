import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Days, Times) {
  return {
    Days, Times,
  };
}

const rows = [
  createData('Saturday', 8 - 10),
  createData('Monday', 10 - 12),
  createData('Wednesday', 12 - 2),

];

const ClassTable = () => (
  <TableContainer component={Paper}>
    <Table sx={{ width: '400px', height: '300px' }} size="small" aria-label="a dense table">
      <TableHead sx={{ backgroundColor: '#E4DCCF', height: '70px' }}>
        <TableRow>
          <TableCell>Days</TableCell>
          <TableCell align="right">Times</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(() => (
          <TableRow>
            <TableCell component="th" scope="row">
              Saturday
            </TableCell>

            <TableCell align="right">8 - 10</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
export default ClassTable;
