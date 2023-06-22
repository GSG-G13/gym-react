import styled from 'styled-components';
import { Typography } from '@mui/material';
import InputComp from '../inputfield/inputfield';
import ButtonComponent from '../button/Button';
import { passwordIcon, userIcon, genderIcon, weightIcon, emailIcon, birthDataIcon, heightIcon } from '../../utilize/icons';

const SignupWrapper = styled.div`
display: flex;
flex-direction: row;
jsutify-content: space-between;
align-contetn: center;
padding: 0rem;
`;

const FieldColumn = styled.div`
display: flex;
flex-direction: column;
jsutify-content: space-between;
align-contetn: center;
padding: 2rem;
gap:0.8rem;
margin-bottom: rem; /* Add this line to increase the distance between columns */


`;
const CompWrapper = styled.div`
width: 100%;
max-width: 700px;
margin:  auto;
`;

const ButtonContainer = styled.div`
width: 70%;
margin-left: 8.5rem;
`;

const Inputstyled = styled(InputComp)`
position: relative;
left: 100px;
bottom: 200px;
padding-bottom: 2rem;
padding-top: 2rem;
padding: 6rem;
margin-bottom: 8rem;
margin-top: 3rem;
`;

const SignupComp = () => (
  <CompWrapper>
    <div>
      <Typography
        variant="h1"
        sx={{
          marginBottom: '3.125rem', fontWeight: '700', position: 'relative', left: '18.5rem', top: '3rem',
        }}
      >
        Sign Up
      </Typography>
      <SignupWrapper>

        <FieldColumn>
          <Inputstyled name="Username" sx={{ marginBottom: '8rem' }} icon={userIcon} />
          <Inputstyled name="Password" icon={passwordIcon} sx={{ marginBottom: '8rem' }} />
          <Inputstyled name="Gender" icon={genderIcon} sx={{ marginBottom: '8rem', marginTop: '3rem' }} />
          <Inputstyled name="Weight" icon={weightIcon} />
          <Inputstyled name="Goal Weight" icon={weightIcon} />
        </FieldColumn>

        <FieldColumn>
          <Inputstyled name="Email" icon={emailIcon} />
          <Inputstyled name="Confirm Password" icon={passwordIcon} />
          <Inputstyled name="Age" icon={birthDataIcon} />
          <Inputstyled name="Height" icon={heightIcon} />
        </FieldColumn>

      </SignupWrapper>
    </div>

    <ButtonContainer>

      <ButtonComponent variant="contained" color="#002B5B">
        Sign up
      </ButtonComponent>
    </ButtonContainer>

  </CompWrapper>
);

export default SignupComp;
