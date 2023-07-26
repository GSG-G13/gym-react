import styled from 'styled-components';

const SignupWrapper = styled.div`
// display: flex;
// flex-wrap: wrap;
// justify-content: space-between;
// align-content: center;
// padding: 0rem;
// width:50%;
`;
const FieldColumn = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap:15px;
`;

const CompWrapper = styled.div`
margin-top:70px;
width: 60%;
`;

const ButtonContainer = styled.div`
margin-top: 1rem;
width: 100%;
display: flex;
justify-content: center;
`;

export {
  CompWrapper, ButtonContainer, FieldColumn, SignupWrapper,
};
