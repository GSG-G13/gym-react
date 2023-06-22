import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import SignInComp from './components/signinform/singinform';

const App = () => (
  <THEME>
    <Box>
      <SignInComp />
      test
    </Box>
  </THEME>
);

export default App;
