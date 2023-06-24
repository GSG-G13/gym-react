import styled from 'styled-components';

import InputComp from '../inputfield/inputfield';

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

export {
  CompWrapper, ButtonContainer, Inputstyled, FieldColumn, SignupWrapper,
};
