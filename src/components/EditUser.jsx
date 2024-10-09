import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        const { first_name, last_name, email } = response.data.data;
        setUserData({ first_name, last_name, email });
      })
      .catch((error) => {
        console.error('Error fetching user data', error);
      });
  }, [id]);

  const handleUpdate = () => {
    axios.put(`https://reqres.in/api/users/${id}`, userData)
      .then(() => {
        setMessage('User updated successfully');
        setTimeout(() => navigate('/users'), 2000);
      })
      .catch((error) => {
        console.error('Error updating user', error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-indigo-300 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Edit User</h2>

        <div className="space-y-4">
          <input
            type="text"
            value={userData.first_name}
            onChange={(e) => setUserData({ ...userData, first_name: e.target.value })}
            placeholder="First Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            value={userData.last_name}
            onChange={(e) => setUserData({ ...userData, last_name: e.target.value })}
            placeholder="Last Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleUpdate}
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Update
          </button>
        </div>

        {message && (
          <p className="text-green-500 mt-4 text-center font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}

export default EditUser;
