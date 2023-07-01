import { Box, Typography } from '@mui/material';
import {
  Statistic, SideBar, NavBarDashBoard, ProductStatisticList,
} from '../../../components';
import Combining from '../../../components/chart';
import RatingChart from '../../../components/ratingChart';

const HomeDashboard = () => (
  <Box>

    <NavBarDashBoard />
    <Box mt={8} sx={{ display: 'flex' }}>
      <SideBar />
      <Box sx={{ width: 'calc(100% - 240px)' }} p={5}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: '50px',
          }}
        >
          <Box>
            <Typography variant="h3" fontWeight="700">Dashboard</Typography>
            <Combining />
          </Box>
          <Statistic />
          <RatingChart />
          <ProductStatisticList />
        </Box>

      </Box>
    </Box>

  </Box>
);
export default HomeDashboard;
