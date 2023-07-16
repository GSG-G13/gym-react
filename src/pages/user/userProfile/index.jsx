import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import { PersonalInfo, ProfileNav } from '../../../components';
import ClassTable from './classesTable';
import OrderTable from './ordersTable';
import useAuth from '../../../hook/useAuth';

const UserProfile = () => {
  const { user: userData } = useAuth();

  const [userClasses, setUserClasses] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
  const [tableName, setTableName] = useState('');
  const getUserClasses = async () => {
    const { data, status } = await axios.get('/api/subscriptions/user');
    if (status === 200) {
      setUserClasses([data.userSubscriptionData]);
    }
  };
  const getUserOrders = async () => {
    const { data, status } = await axios.get('/api/orders/user');
    if (status === 201) {
      setUserOrders([data.orders]);
    }
  };

  return (
    <Box pt={12} marginBottom="2rem">
      <Box>
        <Container>
          <Box m="auto" width="70%">
            <Box>
              <PersonalInfo userData={userData} />
            </Box>
            <Box>
              <ProfileNav
                getData={
                  tableName === 'orders' ? getUserOrders : getUserClasses
                }
                setTableName={setTableName}
              />
            </Box>
            <Box mb={20}>
              {tableName === 'orders' ? (
                <OrderTable ordersData={userOrders[0]} />
              ) : (
                <ClassTable classData={userClasses[0]} />
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default UserProfile;
