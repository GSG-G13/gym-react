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
      sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: '1px solid rgba(255,255,255,0.2)',borderTop: '1px solid rgba(255,255,255,0.2)',
      }}
      component="div"
      px={2}
    >
      <Typography pb={1} align="left" pt="25PX" variant="h3" color="#fff" fontWeight={600}>Categories</Typography>
      <Divider />

      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5, mt: 2, alignItems: 'center',
      }}
      >
        {
          categories[0]?.map((category) => (
            <NavLink
              // eslint-disable-next-line no-underscore-dangle
              style={() => ({
                textDecoration: 'none',
                padding: '5px 10px',
                border: '1px solid #FF4601',
                borderRadius: '5px',
                transition: 'all 0.5s ease',
                textTransform: 'capitalize',
                color: '#Fff',
                width: 150,
              })}
              to="."
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
