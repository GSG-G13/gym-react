import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import { ProductStatisticList } from './components';

const App = () => (
  <THEME>
    <Box>
      <ProductStatisticList />
    </Box>
  </THEME>
);

export default App;
