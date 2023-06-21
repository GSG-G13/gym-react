import './App.css';
import { Box } from '@mui/system';
import THEME from './utilize/Theme';
import { PersonalInfo } from './components';

const App = () => (
  <THEME>
    <Box>
      <PersonalInfo />
    </Box>
  </THEME>
);

export default App;
