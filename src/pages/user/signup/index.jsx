import { Box } from '@mui/system';
import SignupComp from '../../../components/signup';
import Footer from '../../../components/footer/Footer';
import NavbarClient from '../../../components/navbar/NavbarClient';
import StyledImg from './styledComps';

const SignupPage = () => (
  <div>
    <NavbarClient />
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <StyledImg />
      <SignupComp />
    </Box>
    <Footer />
  </div>
);

export default SignupPage;
