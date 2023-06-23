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
    deleteList(state, action) {
      return state.filter((data) => data.id !== action.payload.id);
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
    deleteCard(state, action) {
      state = state.map((list) =>
        list.id === action.payload.id
          ? {
              ...list,
              cards: list.cards.filter((card) => card.id !== action.payload.id),
            }
          : list
      );
    },
    dropCard(state, action) {
      const card = state.reduce((cards, list) => {
        if (list.id === action.payload.source.droppableId)
          [cards] = list.cards.filter((card) =>
            card.id === action.payload.draggableId ? true : false
          );
        return cards;
      });
      console.log(card);
      state = state.map((list) => {
        let lists = list;

        if (list.id === action.payload.destination.droppableId) {
          lists = {
            ...list,
            cards: [...list.cards, card],
          };
        }
        if (list.id === action.payload.source.droppableId) {
          lists = {
            ...list,
            cards: list.cards.filter(
              (card) => card.id !== action.payload.draggableId
            ),
          };
        }

        return lists;
      });

      return state;
    },
  },

  extraReducers(builder) {
    builder.addCase(setActive, (state, action) => {
      return (state = action.payload.lists);
    });
  },
});

export default listSlice.reducer;
export const { addCard, addList, deleteList, dropCard } = listSlice.actions;
