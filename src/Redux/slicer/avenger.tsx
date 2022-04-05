import { createSlice } from "@reduxjs/toolkit";
import Avengers from "../../ReduxLists/AvengerList";

const avengers = createSlice({
  name: "avengers",
  initialState: {
    avengers: Avengers,
  },
  reducers: {},
});

export default avengers.reducer;
