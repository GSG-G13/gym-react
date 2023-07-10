import { Button } from '@mui/material';
import styled from 'styled-components';

const ButtonComponent = ({
  variant,
  children,
  flex,
  onClick,
  secondOnClick,
  width,
}) => (
  <StyledButton
    variant={variant}
    flex={flex}
    sx={{
      cursor: 'pointer',
      color: '#fff',
      width: `${width}`,
      backgroundColor: '#FF4601',
      borderRadius: '10px',
      fontSize: 12,
      '&:hover': { backgroundColor: '#FF4601' },
    }}
    onClick={onClick || secondOnClick}
  >
    {children}
  </StyledButton>
);
const StyledButton = styled(Button)`
  flex: ${({ flex }) => (flex || '0.2')};
  padding: .7rem 1rem !important;
  font-weight:600 !important;
  font-size:14px !important;
`;

export default ButtonComponent;
