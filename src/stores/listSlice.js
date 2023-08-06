import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const storedValue = localStorage.getItem("list");
const data = storedValue ? JSON.parse(storedValue) : [];

const listSlice = createSlice({
  name: "list",
  initialState: data,
  reducers: {
    // lists functions
    setBoard(state, action) {
      state = action.payload;
      return state;
    },
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
    renameList(state, action) {
      state = state.map((list) =>
        list.id === action.payload.id
          ? { ...list, title: action.payload.newTitle }
          : list
      );
      return state;
    },

    // cards functions
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

    // list and card functions
    dropCard(state, action) {
      const { source, destination } = action.payload;

      if (action.payload.type === "list") {
        if (!destination || destination.index === source.index) return;

        state = state
          .toSpliced(source.index, 1)
          .toSpliced(destination.index, 0, state[source.index]);

        return state;
      }

      if (action.payload.type === "card") {
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
      }
    },
  },
});

export default listSlice.reducer;
export const { addCard, addList, deleteList, dropCard, renameList, setBoard } =
  listSlice.actions;
