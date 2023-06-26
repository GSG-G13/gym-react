import { Box } from '@mui/material';
import SignupPage from './pages/user/signup';
import THEME from './utilize/Theme';
import './index.css';

const App = () => (

  <THEME>
    <Box backgroundColor="colors.primary">
      Hello from GYM APP
      <SignupPage />
    </Box>
  </THEME>
);
export default App;
