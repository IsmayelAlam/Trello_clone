import { nanoid } from "@reduxjs/toolkit";

export const initialData = [
  {
    id: nanoid(),
    date: Date.now(),
    title: "test project 01",
    type: "board",
    favorite: true,
    active: true,
    lists: [
      {
        id: nanoid(),
        date: Date.now(),
        title: "list 01",
        type: "list",
        cards: [
          {
            id: nanoid(),
            title: "card 01",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 02",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 03",
            type: "card",
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
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 02",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 03",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 04",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 05",
            type: "card",
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
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 02",
            type: "card",
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
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 02",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 03",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 04",
            type: "card",
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
    type: "board",
    active: false,
    lists: [
      {
        id: nanoid(),
        date: Date.now(),
        title: "list 01",
        type: "list",
        cards: [
          {
            id: nanoid(),
            title: "card 01",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 02",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 03",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 04",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 05",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 06",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 07",
            type: "card",
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
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 02",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 03",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 04",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 05",
            type: "card",
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
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 02",
            type: "card",
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
    type: "board",
    lists: [
      {
        id: nanoid(),
        date: Date.now(),
        title: "list 01",
        type: "list",
        cards: [
          {
            id: nanoid(),
            title: "card 01",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 02",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 03",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 04",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 05",
            type: "card",
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
            type: "card",
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
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 02",
            type: "card",
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
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 02",
            type: "card",
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
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 02",
            type: "card",
            date: Date.now(),
          },
          {
            id: nanoid(),
            title: "card 03",
            type: "card",
            date: Date.now(),
          },
        ],
      },
    ],
  },
];
