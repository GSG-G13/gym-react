import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import SignupComp from './components/signup';

const App = () => (
  <THEME>
    <Box>
      <SignupComp />
    </Box>
  </THEME>
);

export default App;
