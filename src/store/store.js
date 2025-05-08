import { configureStore } from "@reduxjs/toolkit";
import zoneReducer from "./zone/zoneSlice";
import memberReducer from './member/personal-member-form/personalMemberSlice'
import profileReducer from './member/profileSlice';

const store = configureStore({
  reducer: {
    zone: zoneReducer,
    member : memberReducer,
    profile: profileReducer,
  },
});
export default store;
