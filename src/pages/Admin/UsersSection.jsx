import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersSection = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/users/getUsers');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  const onDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/users/deleteUser/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  return (
    <div className="">
      <h3 className="text-xl font-semibold">Users</h3>
      <hr className='mt-2' />
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="">
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Verified</th>
            <th className="border p-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {users?.length > 0 ? (
            users?.map((user) => (
              <tr key={user._id} className="text-center">
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.role}</td>
                <td className="border p-2">{user.isVerified  ? "Yes" : "No"}</td>
                <td className="border p-2">{new Date(user.createdAt).toLocaleString()}</td>
                <td className="border p-2">
                  <button
                    onClick={() => onDeleteUser(user._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center p-4">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersSection;
