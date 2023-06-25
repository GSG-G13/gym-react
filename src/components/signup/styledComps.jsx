import styled from 'styled-components';

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

export {
  CompWrapper, ButtonContainer, FieldColumn, SignupWrapper,
};
