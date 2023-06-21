import { Box } from '@mui/material';
import './App.css';
import THEME from './utilize/Theme';
import FormDashBoard from './components/formDashboard/FormDashBoard';

const App = () => (
  <THEME>
    <Box>
      <FormDashBoard />
    </Box>
  </THEME>
);

export default App;
