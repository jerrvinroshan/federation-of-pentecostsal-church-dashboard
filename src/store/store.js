import { configureStore } from "@reduxjs/toolkit";
import zoneReducer from "./zone/zoneSlice";
import memberReducer from './member/personal-member-form/personalMemberSlice'

const store = configureStore({
  reducer: {
    zone: zoneReducer,
    member : memberReducer,
  },
});
export default store;
