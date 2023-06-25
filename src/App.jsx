import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import SignupComp from './components/signup';

const App = () => (

  <THEME>
    <Box>
      Hello from GYM APP
      <SignupComp />
    </Box>
  </THEME>
);
export default App;
