import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import './index.css';
import Provider from './context/Provider';
import { UserSettingData } from './components';

const App = () => (
  <Provider>
    <THEME>
      <Box backgroundColor="colors.primary">
        {/* Hello from GYM APP */}
        <UserSettingData />
      </Box>
    </THEME>
  </Provider>
);
export default App;
