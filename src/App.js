import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './components/Auth';
import UserList from './components/UserList';
import EditUser from './components/EditUser';

const PrivateRoute = ({ children }) => {
  return localStorage.getItem('token') ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/users" element={<PrivateRoute><UserList /></PrivateRoute>} />
        <Route path="/edit-user/:id" element={<PrivateRoute><EditUser /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
