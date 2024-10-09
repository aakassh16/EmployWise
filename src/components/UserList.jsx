import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = (page) => {
    axios.get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => {
        console.error('Error fetching users', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting user', error);
      });
  };

  const handleEdit = (id) => {
    navigate(`/edit-user/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-indigo-200 flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-gray-800 mt-10 mb-6">User List</h2>
      <div className="overflow-x-auto w-full max-w-4xl shadow-lg bg-white rounded-lg">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-sm font-medium text-gray-600">Avatar</th>
              <th className="p-4 text-sm font-medium text-gray-600">First Name</th>
              <th className="p-4 text-sm font-medium text-gray-600">Last Name</th>
              <th className="p-4 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-t hover:bg-gray-100">
                <td className="p-4">
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td className="p-4 text-gray-800">{user.first_name}</td>
                <td className="p-4 text-gray-800">{user.last_name}</td>
                <td className="p-4 flex space-x-4">
                  <button
                    onClick={() => handleEdit(user.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6 space-x-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={`py-2 px-4 rounded-lg ${page === 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'} transition-all duration-300`}
        >
          Prev
        </button>
        <span className="text-gray-800 font-medium">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className={`py-2 px-4 rounded-lg ${page === totalPages ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'} transition-all duration-300`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserList;
