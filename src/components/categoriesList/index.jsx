import React, { useState } from 'react';
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
  const [categories, setCategories] = useState()
  const getAllCategries = async () => {
    const response = await axios.get('/api/categories');
    console.log(response);
    setCategory(response)

  }
  return (
    <Box
      component="div"
      px={2}
    >
      <Typography pb={1} align="left" pt="25PX" variant="h3" fontWeight={600}>Categories</Typography>
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
