import { Button } from '@mui/material';
import styled from 'styled-components';

const ButtonComponent = ({
  variant,
  color,
  children,
}) => (
  <StyledButton
    variant={variant}
    sx={{
      backgroundColor: color, fontSize: 12,
    }}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled(Button)`
  width: 90%;
  padding: .7rem 1rem !important;
`;

export default ButtonComponent;
