import { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";

import { labels } from "../../previewBoard";
import { useDispatch } from "react-redux";
import { updateCardLabel } from "../../stores";
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";

export default function AddLabel({ id, label = [], close }) {
  const [selected, setSelected] = useState(label);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCardLabel({ id, selected }));
  }, [selected]);

  const selectedTitles = labels.map((select) => select.title);

  labels.push(
    ...selected.filter((label) => !selectedTitles.includes(label.title))
  );

  const handleAddNewLabel = (e) => {
    e.preventDefault();

    if (
      !selected.some((lb) => lb.title.toLowerCase() === title.toLowerCase())
    ) {
      setSelected((lb) => [...lb, { title, color }]);
      labels.push({ title, color });
    }

    setColor("");
    setTitle("");
  };

  return (
    <div className="w-64 absolute bg-slate-600 rounded-lg shadow-lg px-2 py-1 top-0 left-full">
      <div className="w-full text-end pb-2">
        <AiOutlineCloseCircle
          className="w-5 h-5 inline-block cursor-pointer"
          onClick={() => close(false)}
        />
      </div>
      <ul className="w-full overflow-y-scroll scrollbar flex flex-wrap items-center justify-center gap-2">
        {labels.map((label) => (
          <li
            className="rounded-md px-2 py-px h-fit capitalize flex items-center justify-between shadow font-semibold cursor-pointer"
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
      <form
        className="w-full bg-slate-500 my-2 px-2 flex justify-between items-center gap-1 rounded-md overflow-hidden"
        onSubmit={handleAddNewLabel}
      >
        <input
          type="color"
          className="bg-transparent"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <input
          type="text"
          className="bg-transparent outline-none h-8 w-full"
          placeholder="add new label"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button type="submit">
          <AiOutlinePlusCircle />
        </button>
      </form>
    </div>
  );
}
