import { Box } from '@mui/material';
import './App.css';
import THEME from './utilize/Theme';
import SearchDashboard from './components/searchDashboard/Search';

const App = () => (
  <THEME>
    <Box>
      <SearchDashboard />
    </Box>
  </THEME>
);

export default App;
