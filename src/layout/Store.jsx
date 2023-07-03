import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { useState } from 'react';
import { CategoriesList, HomeStore } from '../components';

const StoreLayout = () => {
  const [category, setCategory] = useState('');
  return (
    <Box>
      <Container>
        <HomeStore />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          <CategoriesList setCategory={setCategory} />
          <Outlet context={category} />
        </Box>
      </Container>
    </Box>
  );
};

export default StoreLayout;
