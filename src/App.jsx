import { Box } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import THEME from './utilize/Theme';
import router from './routes/router';
import Provider from './context/Provider';

const App = () => (
  <Provider>
    <THEME>
      <Box>
        <RouterProvider router={router} />
      </Box>
    </THEME>
  </Provider>
);
export default App;
