import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { addList } from "./listSlice";
import { initialData } from "./testData";

const boardSlice = createSlice({
  name: "board",
  initialState: initialData,
  reducers: {
    addBoard(state, action) {
      state = state.map((board) => (board = { ...board, active: false }));
      state = [
        ...state,
        {
          active: true,
          date: Date.now(),
          favorite: false,
          id: nanoid(),
          title: action.payload,
          lists: [],
        },
      ];
      return state;
    },
    deleteBoard(state, action) {
      return state.filter((data) => data.id !== action.payload.id);
    },
    setActive(state, action) {
      state = state.filter((data) =>
        data.id !== action.payload.id
          ? (data.active = false)
          : (data.active = true)
      );
    },
    setFavorite(state, action) {
      state = state.map((data) =>
        data.id === action.payload ? (data.favorite = !data.favorite) : data
      );
    },
  },

  extraReducers(builder) {
    builder.addCase(addList, (state, action) => {
      console.log(state);
    });
  },
});

export default boardSlice.reducer;
export const { addBoard, setActive, setFavorite, deleteBoard } =
  boardSlice.actions;

// console.log(initialData);
