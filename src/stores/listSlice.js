import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "./testData";
import { setActive } from "./boardSlice";

const [initData] = initialData.filter((date) => date.active);

const listSlice = createSlice({
  name: "list",
  initialState: initData.lists,
  reducers: {
    addList(state, action) {
      state = state.push({
        id: nanoid(),
        title: action.payload,
        date: Date.now(),
        cards: [],
      });
    },
    addCard(state, action) {
      state = state.map((list) =>
        list.id === action.payload.id
          ? list.cards.push({
              id: nanoid(),
              title: action.payload.title,
              date: Date.now(),
            })
          : list
      );
    },
  },

  extraReducers(builder) {
    builder.addCase(setActive, (state, action) => {
      console.log(state);
      return (state = action.payload.lists);
    });
  },
});

export default listSlice.reducer;
export const { addCard, addList } = listSlice.actions;
