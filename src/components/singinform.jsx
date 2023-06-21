import InputComp from './inputfield';
import { passwordIcon, userIcon } from '../utilize/icons';
import ButtonComponent from './button/Button';

const SignInComp = () => {
  console.log('react');

  return (
    <div>
      <InputComp name="Email" type="signin" icon={userIcon} />
      <InputComp name="Password" type="signin" icon={passwordIcon} />
      <ButtonComponent variant="contained" width="671px" color="#002B5B" height="81px"><h3>Sign in</h3></ButtonComponent>
    </div>
  );
};

export default SignInComp;
