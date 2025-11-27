import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../app/providers/AuthProvider';
import { Loader } from '../Feedback/Loader/Loader';

export const PublicRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loader />;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

