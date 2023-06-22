import styled from 'styled-components';
import InputComp from '../inputfield/inputfield';
import { userIcon } from '../../utilize/icons';

const SignupWrapper = styled.div`
display: flex;
flex-direction: column;
jsutify-content: space-between;
align-contetn: center;
padding: 2rem;
`;

const SignupComp = () => {
  console.log('e');
  return (
    <div>
      <SignupWrapper>

        <InputComp name="Username" icon={userIcon} width="22.354375rem" height="3.625rem" />
        <InputComp name="Username" icon={userIcon} width="22.354375rem" height="3.625rem" />
        <InputComp name="Username" icon={userIcon} width="22.354375rem" height="3.625rem" />
        <InputComp name="Username" icon={userIcon} width="22.354375rem" height="3.625rem" />
        <InputComp name="Username" icon={userIcon} width="22.354375rem" height="3.625rem" />
        <InputComp name="Username" icon={userIcon} width="22.354375rem" height="3.625rem" />
        <InputComp name="Username" icon={userIcon} width="22.354375rem" height="3.625rem" />
      </SignupWrapper>

    </div>
  );
};

export default SignupComp;
