
import { createSlice } from '@reduxjs/toolkit';

const activeLinkSlice = createSlice({
  name: 'activeLink',
  initialState: {
    activeLink: 'manageRoles', 
  },
  reducers: {
    setActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
  },
});

export const { setActiveLink } = activeLinkSlice.actions;

export default activeLinkSlice.reducer;