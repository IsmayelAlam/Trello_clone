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
        title: action.payload.title,
        date: Date.now(),
        cards: [],
      });
    },

    deleteList(state, action) {
      return state.filter((data) => data.id !== action.payload.id);
    },

    // for cards
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
      const { source, destination, draggableId } = action.payload;

      if (
        !destination ||
        (destination.droppableId === source.droppableId &&
          destination.index === source.index)
      )
        return;

      let card = state.reduce((cards, list) => {
        if (list.id === source.droppableId) cards = list.cards[source.index];
        return cards;
      }, []);

      state = state.map((list) => {
        if (list.id === source.droppableId) {
          list = {
            ...list,
            cards: [...list.cards.toSpliced(source.index, 1)],
          };
        }
        return list;
      });

      state = state.map((list) => {
        let lists = list;

        if (
          list.id === destination.droppableId &&
          destination.droppableId !== source.droppableId
        ) {
          lists = {
            ...list,
            cards: [...list.cards.toSpliced(destination.index, 0, card)],
          };
        }

        if (
          list.id === source.droppableId &&
          destination.droppableId === source.droppableId
        ) {
          lists = {
            ...list,
            cards: [...list.cards.toSpliced(destination.index, 0, card)],
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
