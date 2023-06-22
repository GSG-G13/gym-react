import { Box } from '@mui/material';
import './App.css';
import THEME from './utilize/Theme';
// import ProductCard from './components/productCard/ProductCard';
import ProductList from './components/productList/ProductList';

const App = () => (
  <THEME>
    <Box>
      {/* test */}
      <ProductList />
    </Box>
  </THEME>
);

export default App;
