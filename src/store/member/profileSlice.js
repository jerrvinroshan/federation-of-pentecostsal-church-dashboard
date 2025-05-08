import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNo: "",
    address: "",
    zone: "",
  },
  profilePic: null,
  isLoggedIn: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    setProfilePic: (state, action) => {
      state.profilePic = action.payload;
    },
    clearUser: (state) => {
      state.user = {
        firstName: "",
        lastName: "",
        emailId: "",
        phoneNo: "",
        address: "",
        zone: "",
      };
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, clearUser, setProfilePic } = profileSlice.actions;

export default profileSlice.reducer;
