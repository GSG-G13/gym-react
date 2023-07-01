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
      onClick={() => (children === 'Cancel' || children === 'Delete Account' ? setShowForm(false) : setShowForm(true))}
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
  flex: 0.5;
  padding: .7rem 1rem !important;
  font-weight:600 !important;
  font-size:14px !important;
`;

export default ButtonComponent;
