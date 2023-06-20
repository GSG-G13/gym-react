import { Box } from '@mui/material';
import './App.css';
import ButtonComponent from './components/Button';
import THEME from './utilize/Theme';

const App = () => (
  <THEME>
    <Box sx={{ backgroundColor: 'colors.primary' }}>
      Hello from GYM app
      <ButtonComponent color="colors.error">send</ButtonComponent>
    </Box>
  </THEME>
);

export default App;
