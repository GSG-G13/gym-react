/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { userInfo } from '../../../dummyData/productData';
import DashBoardLayOut from '../LayOut';
import DropDownList from '../../../components/dropDownList';

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
  {
    width: 100,
    renderCell: (row) => <DropDownList row={row} url="/api/subscriptions" />,
  },
];
const SubscriptionDashboard = () => {
  const [subscription, setSubscription] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const getSubscription = async () => {
    try {
      const { data: { subscriptionsData } } = await axios.get('/api/subscriptions');
      const allSubscriptionData = [];

      subscriptionsData.map((sub) => allSubscriptionData.push({
        className: sub.classId?.className,
        userName: sub.userId?.username,
        status: sub?.status,
        _id: sub._id,
        price: `${sub.classId?.price}$`,
      }));
      setSubscription(allSubscriptionData);
    } catch (error) {
      setErrorMsg('There is no Subscription');
    }
  };

  useEffect(() => {
    getSubscription();
  }, []);

  return (
    <DashBoardLayOut
      userInfo={userInfo}
      columns={columns}
      rows={subscription}
      error={errorMsg}
      page="subscription"
    />
  );
};

export default SubscriptionDashboard;
