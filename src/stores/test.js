import { createSlice } from "@reduxjs/toolkit";

const card = createSlice({
  name: "pencil",
  initialState: false,
  reducers: {
    invert: (state) => {
      state = true;
    },
  },
});

export default card.reducer;
