import { Button } from '@mui/material';

const ButtonComponent = ({
  variant,
  color,
  children,
  widthBtn,
  heightBtn,
}) => (
  <Button
    variant={variant}
    sx={{
      backgroundColor: color,
      width: widthBtn,
      height: heightBtn,
    }}
  >
    {children}

  </Button>
);

export default ButtonComponent;
