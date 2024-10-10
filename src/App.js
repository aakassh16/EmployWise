import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import UserList from './components/UserList';
import EditUser from './components/EditUser';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/EmployWise" element={<Auth />} />
        <Route 
          path="/users" 
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/edit/:id" 
          element={
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;

