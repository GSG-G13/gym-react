import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import './index.css';
import { Store } from './pages';

const App = () => (

  <THEME>
    <Box backgroundColor="colors.primary">
      {/* Hello from GYM APP */}
      <Store />
    </Box>
  </THEME>
);
export default App;
