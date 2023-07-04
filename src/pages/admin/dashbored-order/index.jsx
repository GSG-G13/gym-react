/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { useEffect, useState } from 'react';
import DashBoardLayOut from '../LayOut';

const columns = [

  {
    field: 'userName',
    headerName: 'userName',

  },
  {
    field: 'productName',
    headerName: 'productName',

  },
  {
    field: 'image',
    headerName: 'Image',
  },
  {
    field: 'amount',
    headerName: 'Amount',
  },
  {
    field: 'totalPrice',
    headerName: 'totalPrice',
  },
  {
    field: 'status',
    headerName: 'Status',
  },

];

const DashOrderPage = () => {
  const [orders, setOrdersData] = useState([]);
  const getOrders = async () => {
    const response = await axios.get('/api/orders');
    setOrdersData(response.data.orders);
  };

  useEffect(() => {
    getOrders();
  }, []);

  const orderData = [];
  orders.map((order) => orderData.push({
    userName: order.userId.username,
    productName: order.productId.title,
    image: order.productId.image,
    status: order.status,
    amount: order.amount,
    totalPrice: `${order.totalPrice}$`,

    _id: order._id,
  }));

  return (

    <DashBoardLayOut
      columns={columns}
      rows={orderData}
      buttonName="Add product"
    />
  );
};
export default DashOrderPage;
