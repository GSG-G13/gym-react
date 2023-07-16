import { RouterProvider } from 'react-router-dom';
import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import router from './routes/router';
import AuthProvider from './context/authorization';

const App = () => (
  <Box>
    <AuthProvider>
      <THEME>
        <RouterProvider router={router} />
      </THEME>
    </AuthProvider>
  </Box>
);
export default App;
