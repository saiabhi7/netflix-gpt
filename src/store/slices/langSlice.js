import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: "eng",
  },
  reducers: {
    switchLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { switchLanguage } = langSlice.actions;

export default langSlice.reducer;
