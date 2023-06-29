import { Box } from '@mui/material';
import { RouterProvider as Router } from 'react-router-dom';
import THEME from './utilize/Theme';
import router from './routes/router';
import './index.css';
import Provider from './context/Provider';

const App = () => (
  <Provider>
    <THEME>
      <Box backgroundColor="colors.primary">
        <Router router={router} />

      </Box>
    </THEME>
  </Provider>
);
export default App;
