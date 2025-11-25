import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/usePermissions';
import { Loader } from '../Feedback/Loader/Loader';
import styles from './RouteGuard.module.css';

export const RouteGuard = ({ 
  children, 
  requiredRole,
  feature,
  fallback = null,
  className = '' 
}) => {
  const { user, hasPermission, isLoading } = useAuth();

  if (isLoading) {
    return fallback || <Loader className={styles.loader} />;
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (requiredRole && !hasPermission(requiredRole)) {
    return <Navigate to="/dashboard" replace />;
  }

  if (feature && !hasPermission(feature)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <div className={className}>{children}</div>;
};

export const PermissionGuard = ({ 
  children, 
  feature,
  role,
  fallback = null 
}) => {
  const { hasPermission } = useAuth();

  if (role && !hasPermission(role)) {
    return fallback;
  }

  if (feature && !hasPermission(feature)) {
    return fallback;
  }

  return children;
};