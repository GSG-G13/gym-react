import { Button } from '@mui/material';

const ButtonComponent = ({
  variant,
  color,
  children,
  width,
  height,
}) => (
  <Button
    variant={variant}
    sx={{
      backgroundColor: color, fontSize: 12, width, height,
    }}
  >
    {children}
  </Button>
);
export default ButtonComponent;
