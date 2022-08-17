import { postReducer } from "./../reducers/postSlice";
import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../reducers/toggleSlice";
import courseSlice from "../reducers/courseSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
    toggle: toggleSlice,
    course: courseSlice,
  },
});

export default store;
