import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import './index.css';
import Provider from './context/Provider';

const App = () => (
  <Provider>
    <THEME>
      <Box backgroundColor="colors.primary">
        Hello from GYM APP

      </Box>
    </THEME>
  </Provider>
);
export default App;
