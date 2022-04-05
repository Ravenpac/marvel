import { createSlice } from "@reduxjs/toolkit";
import HQs from "../../ReduxLists/HqList";

const hqs = createSlice({
  name: "hqs",
  initialState: {
    hqs: HQs,
  },
  reducers: {},
});

export default hqs.reducer;
