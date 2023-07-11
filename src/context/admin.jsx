import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const CheckAdminProvider = ({ children }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user?.role === 'admin') {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

export default CheckAdminProvider;
