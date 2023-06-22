import { Typography } from '@mui/material';
import InputComp from './inputfield/inputfield';
import { passwordIcon, userIcon } from '../utilize/icons';
import ButtonComponent from './button/Button';

const SignInComp = () => {
  console.log('react');

  return (
    <div>
      <Typography variant="h1" sx={{ marginBottom: '50px' }}>
        Sign In
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: '30px' }}>
        Sign in and start managing your candidates!
      </Typography>
      <InputComp name="Email" type="signin" icon={userIcon} />
      <InputComp name="Password" type="signin" icon={passwordIcon} />
      <Typography variant="h6" sx={{ marginBottom: '30px' }}>Forgot password?</Typography>
      <ButtonComponent variant="contained" width="671px" color="#002B5B" height="81px"><h3>Sign in</h3></ButtonComponent>
    </div>
  );
};

export default SignInComp;
