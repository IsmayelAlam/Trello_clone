import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./test";

export const store = configureStore({
  reducer: {
    card: cardSlice,
  },
});
