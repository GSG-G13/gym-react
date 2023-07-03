import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CategoryCard from '../categoryCard/CategoryCard';



const CategoriesList = ({ setCategory }) => {
  const [categories, setCategories] = useState();
  const getAllCategories = async () => {
    const response = await axios.get('/api/categories');
    setCategories(response.data.categories);
  };
  useEffect(() => {
    getAllCategories();
  }, [categories]);

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
          categories?.map((category) => (
            <NavLink
              to={`?category=${category.categoryName}`}
              style={{
                textDecoration: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                transition: 'all 0.5s ease',
                textTransform: 'capitalize',
              }}
              onClick={() => setCategory(category.categoryName)}
            >
              <CategoryCard category={category} />
            </NavLink>
          ))
        }
      </Box>
    </Box>
  );
};

export default CategoriesList;
