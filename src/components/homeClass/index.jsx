import { Box } from '@mui/material';

const HomeClass = () => (
  <Box>

    <Box
      height="100vh"
      sx={{
        backgroundImage: 'url(https://cdn.uc.assets.prezly.com/791a039e-5de0-4dbf-99cf-72688250a0ab/20201203_Social_FIT_2617.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        objectFit: 'cover',
        backgroundPosition: 'center',
      }}
    />
  </Box>
);

export default HomeClass;
