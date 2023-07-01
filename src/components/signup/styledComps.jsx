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

// background-color:red;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-content: center;
// gap:0.8rem;
// margin-bottom: rem; /* Add this line to increase the distance between columns */


`;
const CompWrapper = styled.div`
// width: 50%;
flex:1;
margin-top:70px;
// background-color:blue;
// max-width:  43.75rem;
// margin: auto;
// margin-top: 2rem;
// margin-bottom: 3.5rem;

`;

const ButtonContainer = styled.div`
margin-top: 1rem;
display: flex;
justify-content: center;
width: 100%;
`;

export {
  CompWrapper, ButtonContainer, FieldColumn, SignupWrapper,
};
