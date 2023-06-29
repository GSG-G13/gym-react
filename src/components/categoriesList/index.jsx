import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import CategoryCard from '../categoryCard/CategoryCard';

const categories = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvjUwT6gqiDvnbElziouELL7lV97cOEtAIQ&usqp=CAU',
    title: 'Clothes',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvjUwT6gqiDvnbElziouELL7lV97cOEtAIQ&usqp=CAU',
    title: 'Equipment',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvjUwT6gqiDvnbElziouELL7lV97cOEtAIQ&usqp=CAU',
    title: 'Supplies',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvjUwT6gqiDvnbElziouELL7lV97cOEtAIQ&usqp=CAU',
    title: 'Tools',
  },
];
const CategoriesList = ({ setCategory }) => {
  console.log(setCategory, 'ere');
  return (
    <Box
      component="div"
      px={2}
    >
      <Typography pb={1} align="left" pt="25PX" variant="h3">Categories</Typography>
      <Divider />

      <Box sx={{
        display: 'flex', flexDirection: 'row', gap: 5, mt: 2, alignItems: 'center',
      }}
      >
        {
          categories.map((category) => (
            <CategoryCard key={category.title} category={category} setCategory={setCategory} />
          ))
        }
      </Box>
    </Box>
  );
};

export default CategoriesList;
