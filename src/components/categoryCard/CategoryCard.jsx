import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { ReactComponent as Card } from '../../assets/shooping.svg';

const CategoryCard = ({ category, setCategory }) => (
  <button
    style={{
      width: 'fit-content', border: 'none', cursor: 'pointer', backgroundColor: 'transparent',
    }}
    type="submit"
    onClick={setCategory(category)}
  >
    <Box p={1} height={100}>
      <Box height="70%">
        <Card style={{ width: '100%', height: '100%' }} />
      </Box>
      <Typography my={1} variant="h5" textAlign="center">{category.title}</Typography>
    </Box>

  </button>
);
export default CategoryCard;
