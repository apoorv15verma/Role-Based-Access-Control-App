import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, toggleStatus, updateUser } from '../store/usersSlice';
import editIcon from '../images/editIcon.png';

import deleteIcon from '../images/deleteIcon.png';

const UserTable = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [statusFilter, setStatusFilter] = useState('All'); // State for status filter
  const [editUser, setEditUser] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedRole, setEditedRole] = useState('');

  const handleEdit = (user) => {
    setEditUser(user);
    setEditedName(user.name);
    setEditedRole(user.role);
  };

  const handleSave = () => {
    dispatch(updateUser({ id: editUser.id, name: editedName, role: editedRole }));
    setEditUser(null);
  };

  // Extract unique roles from users
  const uniqueRoles = [...new Set(users.map((user) => user.role))];

  // Filter users based on search term and status filter
  const filteredUsers = users.filter((user) => {
    const matchesSearchTerm = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === 'All' || user.status === statusFilter;
    return matchesSearchTerm && matchesStatus;
  });

  return (
    <div className="overflow-x-auto p-8 sm:px-6 lg:px-8">
      <h2 className="text-xl font-bold mb-2 ml-1">User Management</h2>

      {/* Search input and status filter */}
      <div className="mb-4 flex flex-wrap items-center space-x-4 ">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name..."
          className="w-36 lg:w-full max-w-md px-4 py-2 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300  rounded-md bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border border-gray-300  bg-white  rounded-md shadow-md">
          <thead className="bg-gray-200  text-gray-700 ">
            <tr>
              <th className=" px-4 py-4">Name</th>
              <th className=" px-4 py-4">Role</th>
              <th className=" px-4 py-4">Status</th>
              <th className=" px-4 py-4 w-1/5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50 ' : 'bg-white '
                  } hover:bg-gray-100  transition`}
                >
                  <td className="px-4 py-2   ">
                    {user.name}
                  </td>
                  <td className="px-4 py-2  ">
                    {user.role}
                  </td>
                  <td className="px-4 py-2  ">
                    <span
                      className={`px-2 py-1 text-sm font-medium rounded ${
                        user.status === 'Active'
                          ? 'bg-green-100 text-green-800 '
                          : 'bg-red-100 text-red-800 '
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className=" px-4 py-2 flex gap-4">
                    <button
                      onClick={() => dispatch(toggleStatus(user.id))}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded flex"
                    >
                      Toggle
                    </button>
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-2 rounded flex w-10"
                    >
                       <img src={editIcon} alt="Edit Icon" width="24" height="24"  />
                    </button>
                    <button
                      onClick={() => dispatch(deleteUser(user.id))}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded flex w-10"
                    >
                       <img src={deleteIcon} alt="Delete Icon" width="24" height="24"  />
                      
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-6 text-center text-gray-600 ">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editUser && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center ">
          <div className="bg-white  p-6 rounded shadow-md w-96 mx-2">
            <h3 className="text-lg font-bold mb-4 text-gray-900 ">Edit User</h3>
            <label className="block mb-2">
              <span className="text-gray-700 ">Name</span>
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="mt-1 block w-full border border-gray-300  rounded px-3 py-2"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700 ">Role</span>
              <select
                value={editedRole}
                onChange={(e) => setEditedRole(e.target.value)}
                className="mt-1 block w-full border border-gray-300  rounded px-3 py-2"
              >
                {uniqueRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </label>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setEditUser(null)}
                className="px-4 py-2 text-sm text-gray-600 bg-gray-200 rounded hover:bg-gray-300 "
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
