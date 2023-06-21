import { Box } from '@mui/material';
import './App.css';
import THEME from './utilize/Theme';
import { ClassTable } from './components';

const App = () => (
  <THEME>
    <Box>
      <ClassTable />
    </Box>
  </THEME>
);

export default App;
