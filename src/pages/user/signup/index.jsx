import { Box } from '@mui/system';
import { Container } from '@mui/material';
import SignupComp from '../../../components/signup';
import { ReactComponent as SignUpImg } from '../../../assets/signupimage.svg';

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
        <Box width="40%">
          <SignUpImg width="100%" />
        </Box>
        <SignupComp />
      </Box>
    </Container>

  </Box>
);

export default SignupPage;
