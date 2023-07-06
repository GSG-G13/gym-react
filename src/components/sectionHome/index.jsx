import { Box, Typography } from '@mui/material';

const SectionHome = () => (
  <Box sx={{
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', my: '100px',
  }}
  >
    <Typography
      variant="h2"
      sx={{
        paddingBottom: '25px', color: '#FF4601', fontWeight: '600', letterSpacing: '2px',
      }}
    >
      Fit For Your Lifestyle
    </Typography>
    <Typography
      variant="h4"
      sx={{
        width: '700px',
        letterSpacing: '1.5px',
        marginBottom: '40px',
        lineHeight: '1.7',
      }}
      align="center"
    >
      Wake up with a sunrise meditation,
      sweat it out with lunchtime HIIT, or unwind with an evening flow.
      You’ll find movement for every mood with classes sorted by time,
      style, and skill level.

    </Typography>
    <img
      src="https://image.made-in-china.com/202f0j00zmgtySaFhupV/Professional-Gym-Fitness-Commercial-Gym-Cardio-Machine-Crossfit-Motor-Rowing-Machine.webp"
      alt="pic-home"
      style={{ boxShadow: '10px 10px 5px 0px rgba(231,90,37,0.75)', width: '650px', borderRadius: '10px' }}
    />

  </Box>
);
export default SectionHome;
