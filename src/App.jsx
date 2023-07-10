import {
  RouterProvider,
} from 'react-router-dom';
import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import Provider from './context/Provider';
import router from './routes/router';
import useAuth from './hook/useAuth';

const App = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{
      backgroundColor: user?.role === 'admin' ? '#fff' : '#1E1E1E',
      color: user?.role === 'admin' ? '#000' : '#fff',

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
