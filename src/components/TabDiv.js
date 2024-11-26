import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveLink } from '../store/activeLinkSlice';

function TabDiv() {
    const dispatch = useDispatch();
    const activeLink = useSelector((state) => state.activeLink.activeLink);



    const handleClick = (tab) => {
        dispatch(setActiveLink(tab));
    };

    return (
        <>
            <div className='flex flex-col sm:flex-row'>
                <div className='lg:w-1/2 px-16 w-full text-center lg:text-start'>
                    <h1 className='text-lg lg:text-2xl font-bold tracking-widest uppercase text-black'>{activeLink=== 'manageRoles' ? 'MANAGE ROLE':'MANAGE USER' }</h1>
                </div>
                <div className="flex justify-start w-full">
                    <div className="flex justify-center items-center w-64 text-center">
                        <a
                            href="#"
                            className={`text-gray-500 font-semibold uppercase text-md relative whitespace-nowrap px-4 py-2 leading-10 outline-none border-b-2 border-transparent box-border w-full ${activeLink === 'manageRoles'
                                    ? '!text-blue-500 !font-bold !border-b-2 !border-blue-500'
                                    : ''
                                }`}
                            onClick={() => handleClick('manageRoles')}
                        >
                            Manage Roles
                        </a>
                    </div>
                    <div className="flex justify-center items-center w-64 text-center">
                        <a
                            href="#"
                            className={`text-gray-500 font-semibold uppercase text-md relative whitespace-nowrap px-4 py-2 leading-10 outline-none border-b-2 border-transparent box-border w-full ${activeLink === 'manageUser'
                                    ? '!text-blue-500 !font-bold !border-b-2 !border-blue-500'
                                    : ''
                                }`}
                            onClick={() => handleClick('manageUser')}
                        >
                            Manage User
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TabDiv;