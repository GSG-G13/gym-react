import { Box, Typography } from '@mui/material';
import { ReactComponent as Shopping } from '../../assets/shopping.svg';

const HomeClass = () => (

  <Box sx={{ display: 'flex', alignItems: 'center', px: '50px' }}>
    <Box>
      <Shopping style={{ width: '500px' }} />
    </Box>
    <Box sx={{ flex: '1' }}>
      <Typography variant="h1">Home Class</Typography>
    </Box>
  </Box>

);

export default HomeClass;
