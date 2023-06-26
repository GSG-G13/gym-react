import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import router from './routes/router';
import { RouterProvider } from 'react-router-dom';

const App = () => (

  <THEME>
    <Box>
      <RouterProvider router={router} />
    </Box>
  </THEME>
);
export default App;
