import { Box, Divider, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

// const classes = ['Yoga', 'Building', 'Fitness', 'food'];
const ClassesList = () => {
  const [classData, setClassData] = useState([]);

  const getClassData = async () => {
    const response = await axios.get('/api/classes');
    setClassData([...classData, response.data.classesData]);
  };

  useEffect(() => {
    getClassData();
  }, []);

  return (
    <Box width={350} border="1px solid #ccc" mt={15} mb={15} borderRadius={5} py={3} pl={2}>
      <Typography pt={15} sx={{ fontSize: '25px', padding: '26px', paddingLeft: '5px' }}>Classes</Typography>
      <Divider />
      <Box>
        {classData[0]?.map((classItem) => (
          <NavLink
            // eslint-disable-next-line no-underscore-dangle
            to={`${classItem._id}`}
            key={classItem.className}
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#002B5B' : '',
              color: isActive ? '#fff' : '#000',
              fontSize: '16px',
              textDecoration: 'none',
              display: 'block',
              padding: '16px',
            })}
            mt={3}
          >
            {classItem.className}
          </NavLink>
        ))}
      </Box>
    </Box>
  );
};
export default ClassesList;
