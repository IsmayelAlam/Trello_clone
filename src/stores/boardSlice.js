import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { initialData } from "./testData";

export let activeBoardIndex;

const boardSlice = createSlice({
  name: "board",
  initialState: initialData,
  reducers: {
    addBoard(state, action) {
      state = state.push({
        active: true,
        date: Date.now(),
        favorite: false,
        id: nanoid(),
        title: action.payload,
        lists: [],
      });
    },
    activeBoard(state, action) {},
  },
});

export default boardSlice.reducer;
export const { addBoard, activeBoard } = boardSlice.actions;

// console.log(initialData);
