import { nanoid } from "@reduxjs/toolkit";

export const initialData = [
  {
    id: nanoid(),
    date: Date.now(),
    title: "test project 01",
    favorite: true,
    active: true,
    lists: [
      {
        id: nanoid(),
        date: Date.now(),
        title: "list 01",
        cards: [
          {
            id: nanoid(),
            title: "card 01",
            date: Date.now(),
            description: "",
            label: [],
            taskList: [],
            comment: [],
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
    ],
  },
  {
    id: nanoid(),
    date: Date.now(),
    title: "test project 02",
    favorite: false,
    active: false,
    lists: [
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
    ],
  },
  {
    id: nanoid(),
    date: Date.now(),
    title: "test project 03",
    favorite: false,
    active: false,
    lists: [
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
        ],
      },
      {
        id: nanoid(),
        date: Date.now(),
        title: "list 05",
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
        ],
      },
    ],
  },
];
