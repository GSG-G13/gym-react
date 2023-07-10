import {
  RouterProvider,
} from 'react-router-dom';
import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import Provider from './context/Provider';
import router from './routes/router';

const App = () => (
  <Box>
    <Provider>
      <THEME>
        <RouterProvider router={router} />

      </THEME>
    </Provider>
  </Box>
);
export default App;
