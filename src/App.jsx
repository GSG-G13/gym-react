import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import ProductListDashboard from './pages/admin/productList';

const App = () => (

  <THEME>
    <Box>
      <ProductListDashboard />
    </Box>
  </THEME>
);
export default App;
