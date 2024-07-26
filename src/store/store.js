import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import moviesSlice from "./slices/moviesSlice";
import gptSlice from "./slices/gptSlice";
import langSlice from "./slices/langSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    gpt: gptSlice,
    lang: langSlice,
  },
});

export default store;
