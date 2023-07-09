import { Box, Typography } from '@mui/material';
import * as React from 'react';

const CategoryCard = ({ category }) => (

  <Box p={1} height={100}>
    <Box height="70%">
      {category.categoryImage
        ? <img src={category.categoryImage} alt={category.categoryName} style={{ width: '100%', height: '100%' }} />
        : null}
    </Box>
    <Typography
      color="#fff"
      fontWeight="600"
      my={1}
      variant="h5"
      textAlign="center"
    >
      {category.categoryName}
    </Typography>
  </Box>

);
export default CategoryCard;
