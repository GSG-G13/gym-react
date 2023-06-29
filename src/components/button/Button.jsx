import { Button } from '@mui/material';
import styled from 'styled-components';
import { useContext } from 'react';
import FormContext from '../../context';

const ButtonComponent = ({
  variant,
  color,
  children,
  flex,
}) => {
  const { setShowForm } = useContext(FormContext);
  return (
    <StyledButton
      onClick={() => (children === 'Cancel' || children === 'Delete Account' ? setShowForm(false) : setShowForm(true))}
      variant={variant}
      flex={flex}
      sx={{
        backgroundColor: color, fontSize: 12,
      }}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  flex: ${({ flex }) => (flex || '0.2')};
  max-width: fit-content;
  padding: .7rem 1rem !important;
`;

export default ButtonComponent;
