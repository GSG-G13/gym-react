/* eslint-disable no-underscore-dangle */
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  AddForm, DashTable, SearchInpDash,
} from '../../../dashboardComponents';

const subscriptionInfoTable = ['className', 'username', 'status'];

const SubscriptionDash = () => {
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const getSubscriptions = async () => {
    try {
      const { data: { subscriptionsData } } = await axios.get('/api/subscriptions');
      const subscriptionArray = [];
      subscriptionsData.map((subscription) => subscriptionArray.push({
        className: subscription.classId?.className,
        username: subscription.userId?.username,
        status: subscription.status,
        _id: subscription._id,
      }));
      setSubscriptionData(subscriptionArray);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSubscription = async (id) => {
    try {
      axios.delete(`/api/subscriptions/${id}`);
      console.log(id);
      getSubscriptions();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubscriptions();
  }, []);
  return (
    <Box mt={10}>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        <SearchInpDash />
      </Box>

      <Box mt={5}>
        <DashTable
          array={subscriptionData}
          userInfo={subscriptionInfoTable}
          deleteFunction={deleteSubscription}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '40%',
          backgroundColor: '#111010',
          p: '20px 20px',
          transform: `translateX(${showForm ? 0 : '100%'})`,
          transition: '0.5s ease-in-out',
        }}
      >
        <AddForm setShowForm={setShowForm} showForm={showForm} />
      </Box>
    </Box>
  );
};

export default SubscriptionDash;
