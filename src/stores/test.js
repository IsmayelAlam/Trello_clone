import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialData = [
  {
    id: nanoid(),
    data: new Date(),
    title: "list 01",
    cards: [
      {
        id: nanoid(),
        title: "card 01",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 02",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 03",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 04",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 05",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 06",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 07",
        data: new Date(),
      },
    ],
  },
  {
    id: nanoid(),
    data: new Date(),
    title: "list 02",
    cards: [
      {
        id: nanoid(),
        title: "card 01",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 02",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 03",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 04",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 05",
        data: new Date(),
      },
    ],
  },
  {
    id: nanoid(),
    data: new Date(),
    title: "list 03",
    cards: [
      {
        id: nanoid(),
        title: "card 01",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 02",
        data: new Date(),
      },
    ],
  },
  {
    id: nanoid(),
    data: new Date(),
    title: "list 04",
    cards: [
      {
        id: nanoid(),
        title: "card 01",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 02",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 03",
        data: new Date(),
      },
      {
        id: nanoid(),
        title: "card 04",
        data: new Date(),
      },
    ],
  },
];

const boardSlice = createSlice({
  name: "board",
  initialState: initialData,
  reducers: {
    add(id, payload) {},
  },
});

export default boardSlice.reducer;
export const {} = boardSlice.actions;
