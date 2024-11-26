import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRole } from '../store/rolesSlice';

import addIcon from '../images/addIcon.png'

const RoleForm = () => {
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && permissions) {
      const permissionArray = permissions.split(',').map((perm) => perm.trim());
      dispatch(addRole({ name, permissions: permissionArray }));
      setName('');
      setPermissions('');
    }
  };

  return (
    <form className=" p-8 sm:px-6 lg:px-8 pb-0" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-2 ml-1">Add Role</h2>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
        <input
          type="text"
          placeholder="Role Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-64"
        />
        <input
          type="text"
          placeholder="Read, Write.."
          value={permissions}
          onChange={(e) => setPermissions(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-64"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded sm:mt-0 flex  button-main flex justify-center"
        >
           <img src={addIcon} alt="Add Icon" width="24" height="24" className="mr-2" />
          
          Add
        </button>
      </div>
    </form>
  );
};

export default RoleForm;
