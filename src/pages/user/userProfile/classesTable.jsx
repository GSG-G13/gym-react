import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ClassTable = ({ classData }) => (

  <Table sx={{ height: '300px' }} size="small" aria-label="a dense table">
    <TableHead sx={{ backgroundColor: '#E4DCCF', height: '70px' }}>
      <TableRow>
        <TableCell>className</TableCell>
        <TableCell align="right">status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {classData?.map((row) => (
        <TableRow>
          <TableCell component="th" scope="row">
            {row.classId.className}
          </TableCell>

          <TableCell align="right">{row.status}</TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>

);
export default ClassTable;
