import React from 'react';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import RoleForm from './components/RoleForm'; 
import RoleTable from './components/RoleTable'; 

import TabDiv from './components/TabDiv';
import { useSelector } from 'react-redux';





const App = () => {

  const activeLink = useSelector((state) => state.activeLink.activeLink);

  console.log(activeLink)

  return (
    <div className="min-h-screen transition bg-gray-100  text-gray-900 ">
     
      <div className="container mx-auto">

        <div className='bg-white '>
          <div className=' shadow-md shadow-gray-300 flex justify-center p-4 mb-6'>
            <h1 className="text-lg md:text-2xl font-bold uppercase tracking-widest text-gray-500 text-center">Role-Based Access Control UI</h1>
          </div>

       {/* tab section */}
          <TabDiv />

         
        </div>

        <div className='lg:px-16 py-8 px-2'>

        <div className='bg-white shadow-md'>

          {/* Roles Section */}
          <section className={` ${   activeLink === 'manageUser'? 'hidden' : '' }`}>
         

            <RoleForm />
            <RoleTable />
          </section>

          {/* Users Section */}
          <section className={` ${   activeLink === 'manageRoles'? 'hidden' : '' }`}>
         

            <UserForm />
            <UserTable />
          </section>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
