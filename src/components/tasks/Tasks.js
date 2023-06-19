import { useState } from "react";

import {
  BsChat,
  BsEye,
  BsPencil,
  BsTextLeft,
  BsListCheck,
} from "react-icons/bs";

export default function Tasks({ num }) {
  const [ex, setEx] = useState(false);

  return (
    <li
      className="px-2 py-1 m-2 bg-gray-800 rounded capitalize shadow cursor-pointer relative"
      draggable
      onMouseEnter={() => setEx(!ex)}
      onMouseLeave={() => setEx(!ex)}
      key={num}
    >
      {ex && (
        <BsPencil className="absolute right-0 top-0 p-1 h-6 w-6 rounded hover:bg-slate-700" />
      )}
      <div className="flex flex-wrap items-center">
        <div className="rounded-lg m-1 h-2 w-10 bg-red-700"></div>
        <div className="rounded-lg m-1 h-2 w-10 bg-green-700"></div>
        <div className="rounded-lg m-1 h-2 w-10 bg-blue-700"></div>
      </div>
      <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
      <div className="flex items-center gap-2">
        <BsTextLeft className="py-1 h-6 w-6" />
        <BsListCheck className="py-1 h-6 w-6" />
        <BsChat className="py-1 h-6 w-6" />
        <BsEye className="py-1 h-6 w-6" />
      </div>
    </li>
  );
}
