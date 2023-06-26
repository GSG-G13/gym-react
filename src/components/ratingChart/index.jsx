import { Box, Typography } from '@mui/material';

const RatingChart = () => (
  <Box border="1px solid #ccc" p={2}>
    <Typography>Rating</Typography>
    <Typography>Lorem ipsum dolor sit amet, consectetur</Typography>
    <Box position="relative">
      <Box sx={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: '140px',
        height: '140px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 170,
        zIndex: 3,
      }}
      >
        85%

        <br />
        Revenu
      </Box>

      <Box sx={{
        backgroundColor: '#2FBFDE',
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 140,
      }}
      >
        85%

        <br />
        Orders

      </Box>

      <Box sx={{
        backgroundColor: '#F99C30',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
      }}
      >
        95%

        <br />
        Subscription

      </Box>
    </Box>
  </Box>
);
export default RatingChart;
