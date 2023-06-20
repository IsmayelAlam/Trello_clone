import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import boardSlice from "./boardSlice";

export const store = configureStore({
  reducer: {
    board: boardSlice,
    list: listSlice,
  },
});

export * from "./listSlice";
export * from "./boardSlice";
