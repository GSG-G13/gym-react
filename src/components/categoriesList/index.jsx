/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CategoryCard from '../categoryCard/CategoryCard';

const CategoriesList = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const getAllCategories = async () => {
    const response = await axios.get('/api/categories');
    setCategories([...categories, response.data.categories]);
  };
  useEffect(() => {
    getAllCategories();
  }, []);

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
          categories[0]?.map((category) => (
            <NavLink
              // eslint-disable-next-line no-underscore-dangle
              style={{
                textDecoration: 'none',
                padding: '5px 10px',
                borderRadius: '5px',
                transition: 'all 0.5s ease',
                textTransform: 'capitalize',
              }}
              key={category._id}
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
