/* eslint-disable no-underscore-dangle */
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  AddForm, DashTable, SearchInpDash,
} from '../../../dashboardComponents';
import ToastAlert from '../../../components/toastAlert/ToastAlert';

const subscriptionInfoTable = ['className', 'username', 'status'];

const SubscriptionDash = () => {
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [filteredSubscriptionData, setFilteredSubscriptionData] = useState([]);
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
      getSubscriptions();
      toast.success('Delete Successfully!', { theme: 'dark' });
    } catch (error) {
      toast.error('Delete Failed!', { theme: 'dark' });
    }
  };

  const updateSubscription = async (id) => {
    try {
      await axios.put(`/api/subscriptions/${id}`);
      getSubscriptions();
      toast.success('Update Successfully!', { theme: 'dark' });
    } catch (error) {
      toast.error('Update Failed!', { theme: 'dark' });
    }
  };

  const filterFunc = ({ text }) => {
    if (text) {
      setFilteredSubscriptionData(() => subscriptionData.filter((item) => item
        .className.includes(text)));
    } else {
      setFilteredSubscriptionData(subscriptionData);
    }
  };

  useEffect(() => {
    getSubscriptions();
  }, []);

  const subsArray = filteredSubscriptionData.length > 0
    ? filteredSubscriptionData : subscriptionData;

  return (
    <Box mt={10}>
      <ToastAlert />
      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        {subscriptionData && subscriptionData?.length > 0 && <SearchInpDash data={subscriptionData} handleClick={filterFunc} searchBy="className" />}
      </Box>

      <Box mt={5}>
        <DashTable
          array={subsArray}
          userInfo={subscriptionInfoTable}
          deleteFunction={deleteSubscription}
          updateSubscription={updateSubscription}
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
