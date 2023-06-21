import { Button } from '@mui/material';

const ButtonComponent = ({
  variant,
  color,
  children,
  width,
  height,
}) => (
  <Button variant={variant} sx={{ backgroundColor: color, width, height }}>{children}</Button>
);
export default ButtonComponent;
