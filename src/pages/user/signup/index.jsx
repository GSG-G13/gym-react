import { Box } from '@mui/system';
import { Container } from '@mui/material';
import SignupComp from '../../../components/signup';
// import StyledImg from './styledComps';
import { ReactComponent as SignUpImg } from '../../../assets/singupimage.svg';

const SignupPage = () => (
  <Box
    height="100vh"
    sx={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <Container>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '100px',
      }}
      >
        <SignUpImg style={{ width: '40%', height: '100%' }} />
        <SignupComp />
      </Box>

    </Container>
  </Box>
);

export default SignupPage;
