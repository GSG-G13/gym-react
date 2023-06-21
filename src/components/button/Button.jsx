import { Button } from '@mui/material';

const ButtonComponent = ({
  variant,
  color,
  children,
}) => (
  <Button variant={variant} sx={{ backgroundColor: color, '&:hover': { backgroundColor: '#002B5B' } }}>{children}</Button>
);

export default ButtonComponent;
