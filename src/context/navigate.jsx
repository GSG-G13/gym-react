import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const RequireAuthProvider = ({ children }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(user);
  if (user?.role === 'user' || !user?.role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RequireAuthProvider;
