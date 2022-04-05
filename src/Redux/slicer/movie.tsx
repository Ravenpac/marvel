import { createSlice } from "@reduxjs/toolkit";
import Movies from "../../ReduxLists/MovieList";

const movies = createSlice({
  name: "movies",
  initialState: {
    movies: Movies,
  },
  reducers: {},
});

export default movies.reducer;
