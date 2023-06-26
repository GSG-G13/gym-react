import { Button } from '@mui/material';
import styled from 'styled-components';
import { useContext } from 'react';
import FormContext from '../../context';

const ButtonComponent = ({
  variant,
  color,
  children,
}) => {
  const { setShowForm } = useContext(FormContext);
  return (
    <StyledButton
      onClick={() => (children === 'Cancel' ? setShowForm(false) : setShowForm(true))}
      variant={variant}
      sx={{
        backgroundColor: color, fontSize: 12,
      }}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  flex: 0.2;
  padding: .7rem 1rem !important;
`;

export default ButtonComponent;
