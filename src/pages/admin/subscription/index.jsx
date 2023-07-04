import { useState, useEffect } from 'react';
import axios from 'axios';
import { userInfo } from '../../../dummyData/productData';
import DashBoardLayOut from '../LayOut';

const columns = [
  {
    field: 'userName',
    headerName: 'userName',
  },
  {
    field: 'className',
    headerName: 'className',
  },
  {
    field: 'status',
    headerName: 'Status',
  },
  {
    field: 'price',
    headerName: 'Price',
  },

]
const SubscriptionDashboard = () => {
  const [subscription, setSubscription] = useState([]);
  
  const subscriptionData = [];
  const rows = subscription.map((sub) => subscriptionData.push({ 
    className: sub.classId.className,
     userName: sub.userId.username, 
     status: sub.status,
     _id: sub._id,
     price: `${sub.classId.price}$`
     }));


  const getSubscription = async () => {
    const {data, status} = await axios.get('/api/subscriptions');
    setSubscription(data.subscriptionsData);
  };

  useEffect(() => {
    getSubscription();
  }, []);

  return (<DashBoardLayOut userInfo={userInfo} columns={columns} rows={subscriptionData} />);
};

export default SubscriptionDashboard;
