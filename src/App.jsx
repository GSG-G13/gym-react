import {
  RouterProvider,
} from 'react-router-dom';
import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import Provider from './context/Provider';
import router from './routes/router';

const App = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  return (
    <Box sx={{
      backgroundColor: userData?.role === 'admin' ? '#fff' : '#1E1E1E',
      color: userData?.role === 'admin' ? '#000' : '#fff',

    }}
    >
      <Provider>
        <THEME>
          <RouterProvider router={router} />

        </THEME>
      </Provider>
    </Box>
  );
};
export default App;
