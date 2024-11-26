import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRole, updateRole } from '../store/rolesSlice';
import editIcon from '../images/editIcon.png';
import checkIcon from '../images/checkIcon.png';
import deleteIcon from '../images/deleteIcon.png';

const RoleTable = () => {
  const roles = useSelector((state) => state.roles.roles);
  const dispatch = useDispatch();

  // State to track the editing role
  const [editRoleId, setEditRoleId] = useState(null);
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState('');

  const handleEdit = (role) => {
    setEditRoleId(role.id);
    setRoleName(role.name);
    setPermissions(role.permissions.join(', '));  // Convert array to string for easier editing
  };

  const handleSave = () => {
    const updatedPermissions = permissions.split(',').map(permission => permission.trim()); // Convert back to array
    dispatch(updateRole({ id: editRoleId, name: roleName, permissions: updatedPermissions }));
    setEditRoleId(null); // Reset editing state
    setRoleName('');
    setPermissions('');
  };

  return (
    <div className="overflow-x-auto p-8 sm:px-6 lg:px-8">
      <h2 className="text-xl font-bold mb-2 ml-1">Roles</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className=" px-4 py-4">Role Name</th>
              <th className=" px-4 py-4">Permissions</th>
              <th className=" px-4 py-4 w-1/5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="border-t">
                <td className="border border-gray-200 px-4 py-2">
                  {role.id === editRoleId ? (
                    <input
                      type="text"
                      value={roleName}
                      onChange={(e) => setRoleName(e.target.value)}
                      className="p-2 border border-gray-300 rounded w-full"
                    />
                  ) : (
                    role.name
                  )}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {role.id === editRoleId ? (
                    <input
                      type="text"
                      value={permissions}
                      onChange={(e) => setPermissions(e.target.value)}
                      className="p-2 border border-gray-300 rounded w-full"
                      placeholder="Enter permissions separated by commas"
                    />
                  ) : (
                    role.permissions.join(', ') 
                  )}
                </td>
                <td className=" px-4 py-2 flex gap-4">
                  {role.id === editRoleId ? (
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded flex w-10"
                      onClick={handleSave}
                    >
                      <img src={checkIcon} alt="Save Icon" width="24" height="24"  />
                     
                    </button>
                  ) : (
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-2 rounded flex w-10"
                      onClick={() => handleEdit(role)}
                    >
                       <img src={editIcon} alt="Edit Icon" width="24" height="24"  />
                      
                    </button>
                  )}
                  <button
                    className="bg-red-500 hover:bg-red-600  text-white px-2 py-2 rounded flex w-10"
                    onClick={() => dispatch(deleteRole(role.id))}
                  >
                     <img src={deleteIcon} alt="Delete Icon" width="24" height="24"  />
                    
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleTable;
