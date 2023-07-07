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
  const [ordersData, setOrdersData] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const getOrders = async () => {
    try {
      const { data: { orders } } = await axios.get('/api/orders');
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

      setOrdersData(orderData);
    } catch (error) {
      setErrorMsg('There is no orders');
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (

    <DashBoardLayOut
      columns={columns}
      rows={ordersData}
      buttonName="Add product"
      error={errorMsg}
    />

  );
};
export default DashOrderPage;
