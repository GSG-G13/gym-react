import { Box, Typography } from '@mui/material';
import {
  Statistic, NavBarDashBoard, ProductStatisticList,
} from '../../../components';
import Combining from '../../../components/chart';
import RatingChart from '../../../components/ratingChart';

const HomeDashboard = () => (
  <Box>

    <NavBarDashBoard />

    <Box p={5}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '3fr 1fr',
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
);
export default HomeDashboard;
