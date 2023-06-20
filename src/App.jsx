import { Box } from '@mui/material';
import './App.css';

import { CategoryCard } from './components';
import THEME from './utilize/Theme';

const App = () => (
  <div>
    <THEME>
      <Box>
        <CategoryCard />

      </Box>
    </THEME>
  </div>
);

export default App;
