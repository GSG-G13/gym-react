import React from 'react';
import { Box } from '@mui/material';
import {
  NavBarDashBoard, SearchDashboard, SideBar, Table,
} from '../../../components';
import FormDashBoard from '../../../components/formDashboard/FormDashBoard';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'productId',
    headerName: 'productId',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'content',
    headerName: 'Content',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 160,
    type: 'number',
    editable: true,

  },
  {
    field: 'review',
    headerName: 'Review',
    width: 160,
    type: 'number',
    editable: true,

  },
  {
    field: 'setting',
    headerName: '',
    width: 160,
    type: 'string',
  },

];

const rows = [
  {
    id: 1, productId: 1, title: 'Snow', content: 'Jon', price: 35, review: 4, setting: ':',
  },
  {
    id: 2, productId: 1, title: 'Lannister', content: 'Cersei', price: 42, review: 4, setting: ':',
  },
  {
    id: 3, productId: 1, title: 'Lannister', content: 'Jaime', price: 45, review: 4, setting: ':',
  },
  {
    id: 4, productId: 1, title: 'Stark', content: 'Arya', price: 16, review: 4, setting: ':',
  },
  {
    id: 5, productId: 1, title: 'Targaryen', content: 'Daenerys', price: 29, review: 4, setting: ':',
  },
  {
    id: 6, productId: 1, title: 'Melisandre', content: null, price: 150, review: 4, setting: ':',
  },
  {
    id: 7, productId: 1, title: 'Clifford', content: 'Ferrara', price: 44, review: 4, setting: ':',
  },
  {
    id: 8, productId: 1, title: 'Frances', content: 'Rossini', price: 36, review: 4, setting: ':',
  },
  {
    id: 9, productId: 1, title: 'Roxie', content: 'Harvey', price: 65, review: 4, setting: ':',
  },
];

const ProductListDashboard = () => (
  <Box sx={{ position: 'relative' }}>
    <NavBarDashBoard />
    <Box sx={{ display: 'flex', gap: '30px' }} mt={7}>
      <SideBar />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',

      }}
      >
        <SearchDashboard />
        <Table mt={20} columns={columns} rows={rows} />
      </Box>
    </Box>
    <Box sx={{
      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
    }}
    >
      <FormDashBoard />
    </Box>

  </Box>
);

export default ProductListDashboard;
