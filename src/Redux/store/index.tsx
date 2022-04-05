import avengers from "../slicer/avenger";
import movies from "../slicer/movie";
import hqs from "../slicer/hq";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    avengers: avengers,
    movies: movies,
    hqs: hqs,
  },
});

export type RootState = ReturnType<typeof store.getState>;
