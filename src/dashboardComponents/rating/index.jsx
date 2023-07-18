/* eslint-disable no-underscore-dangle */
import { Box, Typography } from '@mui/material';

const RatingDash = ({ mostOrders, subs }) => {
  const paid = mostOrders.filter((item) => item.status === 'paid').length;
  const requested = mostOrders.filter((item) => item.status === 'requested').length;
  const joined = subs.filter((item) => item.status === 'joined').length;
  const pending = subs.filter((item) => item.status === 'pending').length;
  return (
    <Box p={2} height="400px">
      <Typography variant="h5" fontWeight="700" mb="3px">Rating</Typography>
      <Typography variant="body2" sx={{ color: '#999' }}>Lorem ipsum dolor sit , consectetur</Typography>
      <Box
        width="100%"
        height="100%"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box sx={{
          backgroundColor: 'rgba(255,255,255,0.6)',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          left: 70,
          top: 10,
          zIndex: 3,
        }}
        >
          <Typography variant="h4" fontWeight={500}>
            85%
            <Typography> Revenu</Typography>
          </Typography>
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
          left: 40,
          top: 130,
        }}
        >
          <Typography variant="h4" fontWeight={500}>
            {Math.round(requested + paid / mostOrders.length)}
            {' '}
            %
            <Typography>Orders</Typography>
          </Typography>

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
          left: 160,
          top: 70,

        }}
        >
          <Typography variant="h4" fontWeight={500}>
            {Math.round(joined + pending / subs.length)}
            {' '}
            %
            <Typography>Subscription</Typography>

          </Typography>

        </Box>
      </Box>
    </Box>
  );
};
export default RatingDash;
