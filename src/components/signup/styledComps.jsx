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
margin: auto;
margin-top: 3rem;
margin-bottom: 3.5rem;

`;

const ButtonContainer = styled.div`
// margin-left: 18rem;
display: flex;
justify-content: center;
// border: solid 1px red;
width: 100%;
`;

export {
  CompWrapper, ButtonContainer, FieldColumn, SignupWrapper,
};
