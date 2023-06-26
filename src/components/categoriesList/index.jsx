import React from 'react';
import { Box, Typography } from '@mui/material';
import CategoryCard from '../categoryCard/CategoryCard';

const categories = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvjUwT6gqiDvnbElziouELL7lV97cOEtAIQ&usqp=CAU',
    title: 'clothes',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvjUwT6gqiDvnbElziouELL7lV97cOEtAIQ&usqp=CAU',
    title: 'clothes',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvjUwT6gqiDvnbElziouELL7lV97cOEtAIQ&usqp=CAU',
    title: 'clothes',
  },
];
const CategoriesList = () => (
  <Box
    component="div"
  >
    <Typography align="left" pt="25PX" fontSize="25PX">Categories</Typography>
    <Box sx={{
      display: 'flex', flexDirection: 'column', gap: '10px', mt: 2,
    }}
    >
      {
      categories.map((category) => (
        <CategoryCard key={category.title} category={category} />
      ))
    }
    </Box>
  </Box>
);

export default CategoriesList;
