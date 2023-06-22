import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import { ProductDetails } from './components';

const App = () => (
  <THEME>
    <Box>
      <ProductDetails />
    </Box>
  </THEME>
);

export default App;
