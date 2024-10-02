import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    updateUserProfile(state, action) {
      if (state.user) {
        // Update user profile with the new data
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

// Export the actions
export const { login, logout, updateUserProfile } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
