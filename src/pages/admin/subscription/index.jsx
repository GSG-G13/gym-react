import { useState, useEffect } from 'react';
import axios from 'axios';
import { userInfo, columns } from '../../../dummyData/productData';
import DashBoardLayOut from '../LayOut';

const SubscriptionDashboard = () => {
  const [subscription, setSubscription] = useState([]);

  const getSubscription = async () => {
    const response = await axios.get('/api/subscriptions');
    console.log(response.data.subscription);
    setSubscription(response.data.products);
  };

  useEffect(() => {
    getSubscription();
  }, []);

  return (<DashBoardLayOut userInfo={userInfo} columns={columns} rows={subscription} />);
};

export default SubscriptionDashboard;
