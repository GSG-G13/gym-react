import { Typography } from '@mui/material';
import InputComp from '../inputfield/inputfield';
import ButtonComponent from '../button/Button';
import {
  CompWrapper, ButtonContainer, FieldColumn, SignupWrapper,
} from './styledComps';
import {
  passwordIcon, userIcon, genderIcon, weightIcon, emailIcon, birthDataIcon, heightIcon,
} from '../../utilize/icons';
import Provider from '../../context/Provider';

const SignupComp = () => (
  <Provider>
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
            <InputComp name="Username" sx={{ marginBottom: '8rem' }} icon={userIcon} />
            <InputComp name="Password" icon={passwordIcon} sx={{ marginBottom: '8rem' }} />
            <InputComp
              name="Gender"
              icon={genderIcon}
              sx={{ marginBottom: '8rem', marginTop: '3rem' }}
            />
            <InputComp name="Weight" icon={weightIcon} />
            <InputComp name="Goal Weight" icon={weightIcon} />
          </FieldColumn>

          <FieldColumn>
            <InputComp name="Email" icon={emailIcon} />
            <InputComp name="Confirm Password" icon={passwordIcon} />
            <InputComp name="Age" icon={birthDataIcon} />
            <InputComp name="Height" icon={heightIcon} />
          </FieldColumn>

        </SignupWrapper>
      </div>

      <ButtonContainer>

        <ButtonComponent variant="contained" color="#002B5B">
          Sign up
        </ButtonComponent>
      </ButtonContainer>

    </CompWrapper>
  </Provider>
);

export default SignupComp;
