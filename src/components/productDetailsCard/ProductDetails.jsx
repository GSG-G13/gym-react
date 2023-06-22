import * as React from 'react';
import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ButtonComponent from '../button/Button';

const ProductDetails = () => (
  <Card sx={{
    display: 'flex',
    width: '900px',
    borderRadius: '10px',
    border: '1px solid #000',
    '&': { boxShadow: 'none' },
    p: '30px',
  }}
  >
    <CardMedia
      component="img"
      sx={{ width: '330px', height: '350px', borderRadius: '20px' }}
      image="https://post.greatist.com/wp-content/uploads/sites/2/2022/04/567515-grt-Stationary-Bike-vs.-Treadmill-732x549-thumbnail-732x549.jpg"
      alt="Live from space album cover"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }} pl="20px">
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h2" fontWeight={700}>
          Weight Loss
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div" py={2} mr={3}>
          eget velit. Donec ac tempus ante. Fusce ultricies
          massaa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est,
        </Typography>
        <Box py="20px">
          <Typography component="div" variant="h5">
            Reviews
          </Typography>
          <StarIcon sx={{ color: 'colors.darkBlue' }} />
          <StarIcon sx={{ color: 'colors.darkBlue' }} />
          <StarIcon sx={{ color: 'colors.darkBlue' }} />
          <StarIcon sx={{ color: 'colors.darkBlue' }} />
          <StarBorderIcon sx={{ borderColor: 'colors.darkBlue' }} />
        </Box>

        <ButtonComponent color="colors.darkBlue">Order</ButtonComponent>
      </CardContent>

    </Box>
  </Card>
);
export default ProductDetails;
