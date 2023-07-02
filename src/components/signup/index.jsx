import { Typography, Box } from '@mui/material';
import InputComp from '../inputfield';
import Provider from '../../context/Provider';
import ButtonComponent from '../button/Button';
import {
  CompWrapper, ButtonContainer, FieldColumn,
} from './styledComps';
import {
  passwordIcon, userIcon, genderIcon, weightIcon, emailIcon, birthDataIcon, heightIcon,
} from '../../utilize/icons';

const SignupComp = () => (
  <Provider>

    <CompWrapper>
      <Box>
        <Typography
          variant="h1"
          sx={{
            marginBottom: '2rem',
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          Sign Up
        </Typography>

        <FieldColumn>
          <InputComp name="Username" icon={userIcon} />
          <InputComp name="Password" icon={passwordIcon} />
          <InputComp name="Gender" icon={genderIcon} />
          <InputComp name="Weight" icon={weightIcon} />
          <InputComp name="Goal Weight" icon={weightIcon} />
          <InputComp name="Email" icon={emailIcon} />
          <InputComp name="Confirm Password" icon={passwordIcon} />
          <InputComp name="Age" icon={birthDataIcon} />
          <InputComp name="Height" icon={heightIcon} />
        </FieldColumn>

      </Box>

      <ButtonContainer>

        <ButtonComponent variant="contained" color="#002B5B">
          Sign up
        </ButtonComponent>
      </ButtonContainer>

    </CompWrapper>
  </Provider>
);

export default SignupComp;
