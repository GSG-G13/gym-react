/* eslint-disable no-nested-ternary */
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ButtonComponent from '../button/Button';
import ClassTable from '../classTable/ClassTable';

const ClassInfoComp = () => {
  const { id } = useParams();
  const [classData, setClassData] = useState({});
  const [subscriptionStatus, setSubscriptionStatus] = useState({});

  const getClassById = async () => {
    const response = await axios.get(`/api/classes/${id}`);
    setClassData(response.data.classObj);
  };
  const addSubscription = async () => {
    const { data } = await axios.post(`/api/subscriptions/${id}`);
    setSubscriptionStatus(data.data);
  };

  useEffect(() => {
    getClassById();
  }, [id]);

  return (
    <Box p={7} sx={{ border: '1px solid #ccc', borderRadius: 5 }}>
      <Container>
        {
           !classData ? (<Typography>no data</Typography>)
             : (
               <Box>
                 <Typography mb={10} variant="h1">{classData.className}</Typography>
                 <Box mt={3} sx={{ display: 'flex', alignItems: 'center', gap: 40 }}>
                   <Box>
                     <img
                       src="https://goldsgym.in/uploads/blog/compress-strong-man-training-gym-min.jpg"
                       alt="trainer"
                       style={{
                         width: 170, height: 170, borderRadius: '50%', objectFit: 'cover',
                       }}
                     />
                     <Typography mt="10px" variant="h2">{classData.trainerId?.username}</Typography>
                   </Box>

                   <ButtonComponent onClick={addSubscription} color="colors.darkBlue" flex="1">
                     {subscriptionStatus.status === 'pending'
                       ? 'Pending'
                       : subscriptionStatus.status === 'approved'
                         ? 'Approved' : 'Join Class' }
                   </ButtonComponent>
                 </Box>
                 <Box mt={2}>
                   <Typography pr={3} variant="h5" sx={{ fontSize: '16px', fontWeight: '100' }}>
                     {classData.description}

                   </Typography>

                 </Box>
                 <Box mt={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                   <ClassTable />
                 </Box>
               </Box>
             )

        }
      </Container>
    </Box>
  );
};
export default ClassInfoComp;
