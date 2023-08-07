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
            title:
              "task 01Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam cum assumenda quas officLorem ipsum dolor sit amet consectetur adipisicing elit. Odit nam cum assumenda quas offic",
          },
          {
            marked: false,
            title: "task 02",
          },
          {
            marked: false,
            title: "task 03",
          },
        ],
        notes: [
          "commenttask 01Lorem ipsum dolor sit amet consectetur adipisicing elit.task 01Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ],
      },
      {
        id: nanoid(),
        title: "card 02",
        date: Date.now(),
        description: "",
        label: [],
        taskList: [],
        notes: [],
      },
      {
        id: nanoid(),
        title: "card 03",
        date: Date.now(),
        description: "",
        label: [],
        taskList: [],
        notes: [],
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
        description: "",
        label: [],
        taskList: [],
        notes: [],
      },
      {
        id: nanoid(),
        title: "card 02",
        date: Date.now(),
        description: "",
        label: [],
        taskList: [],
        notes: [],
      },
      {
        id: nanoid(),
        title: "card 03",
        date: Date.now(),
        description: "",
        label: [],
        taskList: [],
        notes: [],
      },
      {
        id: nanoid(),
        title: "card 04",
        date: Date.now(),
        description: "",
        label: [],
        taskList: [],
        notes: [],
      },
      {
        id: nanoid(),
        title: "card 05",
        date: Date.now(),
        description: "",
        label: [],
        taskList: [],
        notes: [],
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

        description: "",
        label: [],
        taskList: [],
        notes: [],
      },
      {
        id: nanoid(),
        title: "card 02",
        date: Date.now(),
        description: "",
        label: [],
        taskList: [],
        notes: [],
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
        description: "",
        label: [],
        taskList: [],
        notes: [],
      },
      {
        id: nanoid(),
        title: "card 02",
        date: Date.now(),
        description: "",
        label: [],
        taskList: [],
        notes: [],
      },
      {
        id: nanoid(),
        title: "card 03",
        date: Date.now(),
        description: "",
        label: [],
        taskList: [],
        notes: [],
      },
      {
        id: nanoid(),
        title: "card 04",
        date: Date.now(),
        description: "",
        label: [],
        taskList: [],
        notes: [],
      },
    ],
  },
];

export const backgroundImages = [
  "https://images.unsplash.com/photo-1549558549-415fe4c37b60",
  "https://images.unsplash.com/photo-1690812099871-47b7f71c93af",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  "https://images.unsplash.com/photo-1493514789931-586cb221d7a7",
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
  "https://images.unsplash.com/photo-1542640244-7e672d6cef4e",
  "https://images.unsplash.com/photo-1541727687969-ce40493cd847",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1448375240586-882707db888b",
  "https://images.unsplash.com/photo-1498550744921-75f79806b8a7",
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad",
  "https://images.unsplash.com/photo-1472457897821-70d3819a0e24",
  "https://images.unsplash.com/photo-1487621167305-5d248087c724",
  "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5",
  "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6",
  "https://images.unsplash.com/photo-1445855743215-296f71d4b49c",
  "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d",
  "https://images.unsplash.com/photo-1464798429116-8e26f96b2e60",
  "https://images.unsplash.com/photo-1507290439931-a861b5a38200",
  "https://images.unsplash.com/photo-1557683316-973673baf926",
  "https://images.unsplash.com/photo-1554034483-04fda0d3507b",
  "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5",
  "https://images.unsplash.com/photo-1557682260-96773eb01377",
  "https://images.unsplash.com/photo-1557683311-eac922347aa1",
  "https://images.unsplash.com/photo-1641326038434-01b0217c18f1",
  "https://images.unsplash.com/photo-1614852206732-6728910dc175",
  "https://images.unsplash.com/photo-1635776062043-223faf322554",
  "https://images.unsplash.com/photo-1614850523296-d8c1af93d400",
  "https://images.unsplash.com/photo-1546448396-6aef80193ceb",
  "https://images.unsplash.com/photo-1614853316476-de00d14cb1fc",
  "https://images.unsplash.com/photo-1618367588421-400296bac364",
  "https://images.unsplash.com/photo-1618367588411-d9a90fefa881",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
];
