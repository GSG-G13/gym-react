import styled from 'styled-components';
import InputComp from '../inputfield/inputfield';
import ButtonComponent from '../button/Button';
import { userIcon } from '../../utilize/icons';

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
`;
const CompWrapper = styled.div`
width: 100%;
max-width: 700px;
margin:  auto;
`;

const ButtonContainer = styled.div`
width: 60%;
margin-left: 9.5rem;
`;

const Inputstyled = styled(InputComp)`
position: relative;
left: 100px;
bottom: 200px;
`;

const SignupComp = () => (
  <CompWrapper>
    <div>

      <SignupWrapper>

        <FieldColumn>
          <InputComp name="Username" icon={userIcon} />
          <InputComp name="Username" icon={userIcon} />
          <InputComp name="Username" icon={userIcon} />
          <InputComp name="Username" icon={userIcon} />
        </FieldColumn>

        <FieldColumn>
          <InputComp name="Username" icon={userIcon} />
          <InputComp name="Username" icon={userIcon} />
          <InputComp name="Username" icon={userIcon} />
          <InputComp name="Username" icon={userIcon} />
        </FieldColumn>

      </SignupWrapper>
    </div>

    <Inputstyled name="Username" icon={userIcon} />
    <ButtonContainer>

      <ButtonComponent variant="contained" color="#002B5B">
        Sign up
      </ButtonComponent>
    </ButtonContainer>

  </CompWrapper>
);

export default SignupComp;
