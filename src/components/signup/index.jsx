import { Typography } from '@mui/material';
import ButtonComponent from '../button/Button';
import {
  CompWrapper, ButtonContainer, Inputstyled, FieldColumn, SignupWrapper,
} from './styledComps';
import {
  passwordIcon, userIcon, genderIcon, weightIcon, emailIcon, birthDataIcon, heightIcon,
} from '../../utilize/icons';

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
