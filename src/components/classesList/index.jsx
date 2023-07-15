import { Box, Divider } from '@mui/material';
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
    <Box height="76%" width="230px" boxShadow="0px 0px 10px 0px  #ff5700" mt={15} mb={15} borderRadius={5} py={3} pl={2}>
      <NavLink
        to="/class"
        variant="h5"
        style={() => ({
          backgroundColor: 'transparent',
          textDecoration: 'none',
          padding: '5px 10px',
          borderRadius: '5px',
          transition: 'all 0.5s ease',
          textTransform: 'capitalize',
          color: 'white',
          border: '1px solid #ff5700',
        })}
      >
        Classes

      </NavLink>
      <Divider />
      <Box mt={2}>
        {classData[0]?.map((classItem) => (
          <NavLink
            // eslint-disable-next-line no-underscore-dangle
            to={`${classItem._id}`}
            key={classItem.className}
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#FF4601' : '',
              color: '#fff',
              fontSize: '12px',
              fontWeight: '500',
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
