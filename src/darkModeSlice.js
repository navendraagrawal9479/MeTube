import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDark: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {toggleDark} = darkModeSlice.actions;

export default darkModeSlice.reducer;