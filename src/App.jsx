import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import Store from './pages/user/product';
import './index.css';

const App = () => (

  <THEME>
    <Box backgroundColor="colors.primary">
      <Store />
    </Box>
  </THEME>
);
export default App;
