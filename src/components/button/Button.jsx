import { Button } from '@mui/material';
import styled from 'styled-components';
// import { useContext } from 'react';
// import FormContext from '../../context';

const ButtonComponent = ({
  variant,
  color,
  children,
  flex,
  onClick,
}) => (
  // const { setShowForm } = useContext(FormContext);
  <StyledButton
    // onClick={(e) => (children === 'Cancel'
    //   || children === 'Delete Account' ? setShowForm(false) : setShowForm(true))}
    onClick={onClick}
    variant={variant}
    flex={flex}
    sx={{
      backgroundColor: color, fontSize: 12,
    }}
  >
    {children}
  </StyledButton>
);
const StyledButton = styled(Button)`
  flex: ${({ flex }) => (flex || '0.2')};
  max-width: fit-content;
  padding: .7rem 1rem !important;
  font-weight:600 !important;
  font-size:14px !important;
`;

export default ButtonComponent;
