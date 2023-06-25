// import styled from 'styled-components';
import { Box } from '@mui/system';
import SignupComp from '../../components/signup';
import Footer from '../../footer/Footer';
import NavbarClient from '../../components/navbar/NavbarClient';
import { ReactComponent as SignupImage } from '../../assets/singupimage.svg';

// const StyledImage = styled.img`
// width: 26rem;
// height: auto;
// margin-left: 1rem;
// margin-top: 1rem;
// position: relative;
// left: 15rem;
// `;

const SignupPage = () => (
  <div>
    <NavbarClient />
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {/* <StyledImage src="../../../public/pictures/singupimage.svg" alt="signup " /> */}
      <SignupImage />
      <SignupComp />
    </Box>
    <Footer />
  </div>
);

export default SignupPage;
