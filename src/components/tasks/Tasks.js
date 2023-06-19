import { useState } from "react";
import { GoPencil } from "react-icons/go";

export default function Tasks({ num }) {
  const [ex, setEx] = useState(false);

  return (
    <li
      className="px-2 py-1 m-2 bg-slate-200 rounded capitalize shadow cursor-pointer relative"
      draggable
      onMouseEnter={() => setEx(!ex)}
      onMouseLeave={() => setEx(!ex)}
      key={num}
    >
      {ex && (
        <GoPencil className="absolute right-0 top-0 p-1 h-6 w-6 rounded hover:bg-slate-300" />
      )}
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </li>
  );
}
