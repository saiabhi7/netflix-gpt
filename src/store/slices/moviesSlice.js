import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    telugu: null,
    english: null,
    homeMovie: null,
  },
  reducers: {
    addTeluguMovies: (state, action) => {
      state.telugu = action.payload;
    },
    addEnglishMovies: (state, action) => {
      state.english = action.payload;
    },
    addHomeMovie: (state, action) => {
      state.homeMovie = action.payload;
    },
  },
});

export const { addTeluguMovies, addEnglishMovies, addHomeMovie } =
  moviesSlice.actions;

export default moviesSlice.reducer;
