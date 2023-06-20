import InputComp from './inputfield';
import { passwordIcon, userIcon } from '../utilize/icons';

const SignInComp = () => {
  console.log('react');

  return (
    <div>
      <InputComp name="Email" type="signin" icon={userIcon} />
      <InputComp name="Password" type="signin" icon={passwordIcon} />
    </div>
  );
};

export default SignInComp;
