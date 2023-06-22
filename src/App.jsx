import { Box } from '@mui/material';
import styled from 'styled-components';
import THEME from './utilize/Theme';
import SignupComp from './components/signup';
import SignInComp from './components/signinform/singinform';

const App = () => (
  <THEME>
    <Box>
      {/* <SignupComp /> */}
      <SignInComp />
    </Box>
  </THEME>
);

export default App;
