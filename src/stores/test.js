import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialData = [
  {
    id: nanoid(),
    date: Date.now(),
    title: "list 01",
    cards: [
      {
        id: nanoid(),
        title: "card 01",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 02",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 03",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 04",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 05",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 06",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 07",
        date: Date.now(),
      },
    ],
  },
  {
    id: nanoid(),
    date: Date.now(),
    title: "list 02",
    cards: [
      {
        id: nanoid(),
        title: "card 01",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 02",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 03",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 04",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 05",
        date: Date.now(),
      },
    ],
  },
  {
    id: nanoid(),
    date: Date.now(),
    title: "list 03",
    cards: [
      {
        id: nanoid(),
        title: "card 01",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 02",
        date: Date.now(),
      },
    ],
  },
  {
    id: nanoid(),
    date: Date.now(),
    title: "list 04",
    cards: [
      {
        id: nanoid(),
        title: "card 01",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 02",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 03",
        date: Date.now(),
      },
      {
        id: nanoid(),
        title: "card 04",
        date: Date.now(),
      },
    ],
  },
];

const boardSlice = createSlice({
  name: "board",
  initialState: initialData,
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
});

export default boardSlice.reducer;
export const { addCard, addList } = boardSlice.actions;

// console.log(initialData);
