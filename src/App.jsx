import { Box } from '@mui/material';
import './App.css';
import THEME from './utilize/Theme';
import NavbarClient from './components/navbar/NavbarClient';

const App = () => (
  <THEME>
    <Box>
      <NavbarClient />
    </Box>
  </THEME>
);

export default App;
