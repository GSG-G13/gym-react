import { Box } from '@mui/material';
import THEME from './utilize/Theme';
import AnnouncementDashboard from './pages/admin/announcement';

const App = () => (

  <THEME>
    <Box>
      <AnnouncementDashboard />
    </Box>
  </THEME>
);
export default App;
