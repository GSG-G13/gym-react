import { Box, Typography } from '@mui/material';
import {
  CardDash, ChartDash, OrderStatistics, RatingDash,
} from '../../../dashboardComponents';

const HomeDash = () => (
  <Box py={10}>
    <Typography color="#fff" mb={3}>Dashboard</Typography>
    <Box
      height={400}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <ChartDash />
      <OrderStatistics />
    </Box>

    <Box mt={10}>
      <Typography color="#fff">Statistics</Typography>
      <Box sx={{ display: 'grid', gap: 5, gridTemplateColumns: '4fr 2fr' }}>
        <CardDash />
        <RatingDash />
      </Box>
    </Box>

  </Box>
);

export default HomeDash;
