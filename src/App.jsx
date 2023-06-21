import { Box } from '@mui/material';
import './App.css';
import THEME from './utilize/Theme';
import Statistic from './components/statisitc/Statistic';

const App = () => (
  <THEME>
    <Box>
      <Statistic />
    </Box>
  </THEME>
);

export default App;
