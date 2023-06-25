import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import SignupComp from './components/signup';

const App = () => (

  <THEME>
    <Box>
      <SignupComp />
      Hello from GYM APP
    </Box>
  </THEME>
);
export default App;
