import { postReducer } from "./../reducers/postSlice";
import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import toggleSlice from "../reducers/toggleSlice";
import courseSlice from "../reducers/courseSlice";
import { RootState } from "../types/storeTypes";

export const rootReducer = combineReducers({
  post: postReducer,
  toggle: toggleSlice,
  course: courseSlice,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState,
  });
}

export default setupStore;
