import { Box } from '@mui/system';
import SignupComp from '../../../components/signup';
import StyledImg from './styledComps';

const SignupPage = () => (
  <div>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <StyledImg />
      <SignupComp />
    </Box>
  </div>
);

export default SignupPage;
