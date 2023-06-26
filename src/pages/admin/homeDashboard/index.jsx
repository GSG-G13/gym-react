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
        <Box sx={{ display: 'flex' }} height="fit-content">
          <Box sx={{ flex: 0.8 }}>
            <Typography>Dashboard</Typography>

            <Combining />
          </Box>
          <Statistic />

        </Box>
        <Box sx={{ display: 'flex', gap: 15 }} height={400}>
          <RatingChart />
          <ProductStatisticList />
        </Box>

      </Box>
    </Box>

  </Box>
);
export default HomeDashboard;