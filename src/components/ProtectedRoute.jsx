import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/EmployWise" />; // Redirect to login if token is not available
  }

  return children;
};

export default ProtectedRoute;
