import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    switchToGPT: false,
  },
  reducers: {
    switchToGPT: (state) => {
      state.switchToGPT = !state.switchToGPT;
    },
  },
});

export const { switchToGPT } = gptSlice.actions;

export default gptSlice.reducer;
