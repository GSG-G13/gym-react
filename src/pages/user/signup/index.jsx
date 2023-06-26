import { Box } from '@mui/system';
import styled from 'styled-components';
import SignupComp from '../../../components/signup';
import Footer from '../../../components/footer/Footer';
import NavbarClient from '../../../components/navbar/NavbarClient';
import { ReactComponent as SignUpImg } from '../../../assets/singupimage.svg';

const StyledImg = styled(SignUpImg)`
width: 27rem;
height: auto;
position: relative;
left: 15rem;
bottom: 2rem;
`;

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
