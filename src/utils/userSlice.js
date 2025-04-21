import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice for managing user data in the Redux store.
 * @typedef {Object} UserSlice
 */
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    getUser: () => {},
    removeUser: () => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
