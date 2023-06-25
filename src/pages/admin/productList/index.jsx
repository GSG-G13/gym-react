import React, { useState } from 'react';
import { Box } from '@mui/material';
import {
  NavBarDashBoard, SearchDashboard, SideBar, Table,
} from '../../../components';
import FormDashBoard from '../../../components/formDashboard/FormDashBoard';
import Provider from '../../../context/Provider';
import { userInfo, columns, rows } from '../../../dummyData/productData';

const ProductListDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Provider setShowForm={setShowForm}>

      <Box>
        <NavBarDashBoard />
        <Box sx={{ display: 'flex', gap: '30px' }}>
          <SideBar />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '30px',

            }}
            my={15}
          >
            <SearchDashboard btnText="Add Product" />
            <Table mt={20} columns={columns} rows={rows} />
          </Box>
        </Box>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: showForm ? 'block' : 'none',
        }}
        >
          <FormDashBoard userInfo={userInfo} />
        </Box>

      </Box>
    </Provider>
  );
};

export default ProductListDashboard;
