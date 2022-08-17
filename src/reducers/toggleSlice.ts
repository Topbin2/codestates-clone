import { ToggleSliceInitialState } from "./../types/toggleTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ToggleSliceInitialState = {
  darkMode: false,
  profileDropDown: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    toggleProfileDropDownOpen: (state) => {
      state.profileDropDown = true;
    },
    toggleProfileDropDownClose: (state) => {
      state.profileDropDown = false;
    },
  },
});

export const {
  toggleDarkMode,
  toggleProfileDropDownOpen,
  toggleProfileDropDownClose,
} = toggleSlice.actions;
export default toggleSlice.reducer;
