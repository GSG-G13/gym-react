import { Box } from '@mui/material';
import './App.css';
import THEME from './utilize/Theme';
import Footer from './footer/Footer';

const App = () => (
  <THEME>
    <Box>
      <Footer />
    </Box>
  </THEME>
);

export default App;
