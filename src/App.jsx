import { Box } from '@mui/material';
import './App.css';
import THEME from './utilize/Theme';
import { SideBar } from './components';

const App = () => (
  <THEME>
    <Box>
      <SideBar />
    </Box>
  </THEME>
);

export default App;
