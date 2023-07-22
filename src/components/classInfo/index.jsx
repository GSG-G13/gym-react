/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import ButtonComponent from '../button/Button';
import ClassTable from '../classTable/ClassTable';
import ToastAlert from '../toastAlert/ToastAlert';
import useAuth from '../../hook/useAuth';

const ClassInfoComp = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [classData, setClassData] = useState({});
  const [subscriptionStatus, setSubscriptionStatus] = useState({});
  const getClassById = async () => {
    try {
      const response = await axios.get(`/api/classes/${id}`);
      setClassData(response.data.classObj);
    } catch (error) {
      console.log(error);
    }
  };

  const getOneSubscription = async () => {
    const { data: { userSubscriptionData } } = await axios.get('/api/subscriptions/user');
    const filterSubscription = userSubscriptionData?.filter(
      (subscription) => subscription.classId?._id === id,
    );
    setSubscriptionStatus(filterSubscription[0]);
  };

  const addSubscription = async () => {
    try {
      const { data } = await axios.post(`/api/subscriptions/${id}`);
      setSubscriptionStatus(data.data);
      toast.success('Subscription added successfully!', {
        theme: 'dark',
      });
      getOneSubscription();
    } catch (error) {
      toast.error('Adding subscription!', {
        theme: 'dark',
      });
    }
  };

  useEffect(() => {
    getClassById();
    getOneSubscription();
  }, [id]);

  return (
    <Box my={15} py={8} boxShadow="0px 0px 10px 0px  #ff5700" sx={{ borderRadius: 5 }}>
      <Container>

        {
          !classData ? (<Typography>no data</Typography>)
            : (
              <Box>
                <ToastAlert />
                <Typography mb={6} variant="h5" fontSize="23px" textTransform="capitalize">{classData.className}</Typography>
                <Box mt={3} sx={{ display: 'flex', alignItems: 'center', gap: 40 }}>
                  <Box>
                    <img
                      src="https://goldsgym.in/uploads/blog/compress-strong-man-training-gym-min.jpg"
                      alt="trainer"
                      style={{
                        width: 150, height: 150, borderRadius: '50%', objectFit: 'cover',
                      }}
                    />
                    <Typography mt="10px" variant="h3">{classData.trainerId?.username}</Typography>
                  </Box>

                  {user ? (
                    <ButtonComponent onClick={addSubscription} color="colors.darkBlue" flex="0.4">
                      {subscriptionStatus?.status === 'pending'
                        ? 'Pending'
                        : subscriptionStatus?.status === 'approved'
                          ? 'Approved' : 'Join Class'}
                    </ButtonComponent>
                  ) : null}
                </Box>
                <Box mt={2}>
                  <Typography pr={3} variant="h6" sx={{ fontSize: '12px', fontWeight: '100', width: '80%' }}>
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
