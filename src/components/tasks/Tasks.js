import { useState } from "react";

import {
  BsChat,
  BsEye,
  BsPencil,
  BsTextLeft,
  BsListCheck,
} from "react-icons/bs";

export default function Tasks({ card }) {
  const [show, setShow] = useState(false);

  return (
    <li
      className="px-2 py-1 m-2 bg-gray-800 rounded capitalize shadow cursor-pointer relative"
      draggable
      onMouseEnter={() => setShow(!show)}
      onMouseLeave={() => setShow(!show)}
      key={card}
      onClick={() => console.log(card.id)}
    >
      {show && (
        <BsPencil className="absolute right-0 top-0 p-1 h-6 w-6 rounded hover:bg-slate-700" />
      )}
      <div className="flex flex-wrap items-center">
        <div className="rounded-lg m-1 h-2 w-10 bg-red-700"></div>
        <div className="rounded-lg m-1 h-2 w-10 bg-green-700"></div>
        <div className="rounded-lg m-1 h-2 w-10 bg-blue-700"></div>
      </div>
      <h2>{card.title}</h2>
      <div className="flex items-center gap-2">
        <BsTextLeft className="py-1 h-6 w-6" />
        <BsListCheck className="py-1 h-6 w-6" />
        <BsChat className="py-1 h-6 w-6" />
        <BsEye className="py-1 h-6 w-6" />
      </div>
    </li>
  );
}
