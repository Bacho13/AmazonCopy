import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  logIn: false,
  guestLocation: null,
};

export const userSLice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state) => {
      state.logIn = True;
    },
    logOut: (state) => {
      state.logIn = flase;
    },
    getGuestLocation: (state, action) => {
      state.guestLocation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut, getGuestLocation } = userSLice.actions;

export default userSLice.reducer;
