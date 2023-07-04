import { Button } from '@mui/material';
import styled from 'styled-components';

const ButtonComponent = ({
  variant,
  color,
  children,
  flex,
  onClick,
  secondOnClick,
}) => (
  <StyledButton
    variant={variant}
    flex={flex}
    sx={{
      backgroundColor: color, fontSize: 12,
    }}
    onClick={onClick || secondOnClick}
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
