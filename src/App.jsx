import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import './index.css';
import { UserProfile } from './pages';
import Provider from './context/Provider';

const App = () => (
  <Provider>

    <THEME>
      <Box backgroundColor="colors.primary">
        {/* Hello from GYM APP */}
        <UserProfile />
      </Box>
    </THEME>
  </Provider>
);
export default App;
