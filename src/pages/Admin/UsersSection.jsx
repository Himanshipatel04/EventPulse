import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader, Trash2 } from "lucide-react";

const UsersSection = () => {
  const [users, setUsers] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("all");
  const [usersCount, setUsersCount] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:4000/api/users/getUsers"
      );
      setUsers(response.data.data);
      setAllUsers(response.data.data);
      setUsersCount(response.data.data.length);
    } catch (error) {
      console.error("Error fetching users", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (dropdownValue === "all") {
      setUsers(allUsers); // Restore all events
      setUsersCount(allUsers.length);
    } else {
      const filteredUsers = allUsers.filter(
        (user) => user.role === dropdownValue
      );
      setUsers(filteredUsers);
      setUsersCount(filteredUsers.length);
    }
  }, [dropdownValue, allUsers]);

  const onDeleteUser = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:4000/api/users/deleteUser/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Users</h3>
        <div className="flex items-center justify-center">
          <p className="mr-5 bg-teal-500 text-white px-2.5 py-1.5 rounded-md">
            {usersCount} users
          </p>

          <select
            name=""
            id=""
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.target.value)}
            className={`p-2 rounded-md text-sm border outline-none `}
          >
            <option value="all">All</option>
            <option value="Attendee">Attendee</option>
            <option value="Admin">Admin</option>
            <option value="Sponsor">Sponsor</option>
            <option value="Organizer">Organizer</option>
          </select>
        </div>
      </div>
      <hr className="mt-2" />
      {isLoading ? (
        <div
          className="flex justify-center items-center h-[85vh]"
        >
          <Loader size={40} className="animate-spin " />
        </div>
      ) : (
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
                  <td className="border p-2">
                    {user.isVerified ? "Yes" : "No"}
                  </td>
                  <td className="border p-2">
                    {new Date(user.createdAt).toLocaleString()}
                  </td>
                  <td className="border p-2">
                    <button
                      onClick={() => onDeleteUser(user._id)}
                      className=""
                    >
                      <Trash2 size={17} />  
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersSection;
