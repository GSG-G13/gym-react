import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import { HomeStore } from './components';

const App = () => (
  <THEME>
    <Box>
      <HomeStore />
    </Box>
  </THEME>
);
export default App;
