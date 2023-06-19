import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./test";

export const store = configureStore({
  reducer: {
    board: boardSlice,
  },
});
