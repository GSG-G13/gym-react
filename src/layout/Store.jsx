import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { CategoriesList, HomeStore, ProductList } from '../components';

const StoreLayout = () => (
  <Box>
    <HomeStore />
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      <CategoriesList />
      <ProductList />
    </Box>
  </Box>
);

export default StoreLayout;
