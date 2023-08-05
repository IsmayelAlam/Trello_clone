import { nanoid } from "@reduxjs/toolkit";

export const previewBoard = [
  {
    id: nanoid(),
    date: Date.now(),
    title: "list 01",
    cards: [
      {
        id: nanoid(),
        title: "card 01",
        date: Date.now(),
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam cum assumenda quas officiis sint temporibus illum modi eum nulla? Quae corporis vero non autem eius dolorum doloribus fuga perferendis!",
        label: [
          {
            type: "vip",
            color: "#ff5412",
          },
        ],
        taskList: [
          {
            marked: true,
            task: "task 01",
          },
        ],
        notes: [
          {
            data: Date.now(),
            comment: "comment 01",
          },
        ],
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
];