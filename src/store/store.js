import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import rolesReducer from './rolesSlice';
import activeLinkReducer from './activeLinkSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    roles: rolesReducer,
    activeLink: activeLinkReducer,
  },
});

export default store;
