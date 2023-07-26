import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { useState } from 'react';
import { CategoriesList, HomeStore } from '../components';

const StoreLayout = () => {
  const [category, setCategory] = useState('');
  return (
    <Box>
      <HomeStore />

      <Container>
        <Box sx={{ display: 'flex', gap: '50px' }} mt={10}>
          <CategoriesList setCategory={setCategory} />
          <Outlet context={category} />
        </Box>
      </Container>
    </Box>
  );
};

export default StoreLayout;
