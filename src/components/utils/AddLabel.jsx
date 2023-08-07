import { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";

import { labels } from "../../previewBoard";
import { useDispatch } from "react-redux";
import { updateCardLabel } from "../../stores";

export default function AddLabel({ id, label = [] }) {
  const [selected, setSelected] = useState([...label]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCardLabel({ id, selected }));
  }, [selected]);

  return (
    <div className="w-64 absolute bg-slate-600 rounded-lg shadow-lg px-5 py-3 top-0 left-full">
      <ul className="w-full space-y-2">
        {labels.map((label) => (
          <li
            className="rounded-md px-2 py-1 capitalize flex items-center justify-between shadow font-semibold cursor-pointer"
            key={label.title}
            style={{ backgroundColor: label.color }}
            onClick={() => {
              if (selected.some((lb) => lb.title === label.title)) {
                setSelected(selected.filter((lb) => lb.title !== label.title));
              } else {
                setSelected((lb) => [...lb, label]);
              }
            }}
          >
            <span>{label.title}</span>
            {selected.some((lb) => lb.title === label.title) && (
              <BsCheck className="w-5 h-5" />
            )}
          </li>
        ))}
      </ul>
      <form className="w-full bg-slate-500 my-2 px-2 flex justify-between items-center gap-1 rounded-md overflow-hidden">
        <input type="color" className="bg-transparent" />
        <input
          type="text"
          className="bg-transparent outline-none h-8 w-full"
          placeholder="add new label"
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}
