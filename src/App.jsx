import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import { Announcement } from './components';

const App = () => (
  <THEME>
    <Box>
      <Announcement />
    </Box>
  </THEME>
);

export default App;
