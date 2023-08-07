import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

import { deleteList, renameList } from "../../stores";
import { useDispatch } from "react-redux";

export default function TaskHeading({ list }) {
  const [rename, setRename] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [newTitle, setTitle] = useState(list.title);

  const dispatch = useDispatch();

  const handleChange = (e) => setTitle(e.target.value);

  const handleRename = (e) => {
    setRename(!rename);
    dispatch(renameList({ id: list.id, newTitle }));
  };

  return (
    <header className="flex p-2 items-center justify-between overflow-visible">
      <h2
        className="text-lg w-full font-semibold capitalize px-4 rounded-lg min-h-[1.5rem] cursor-pointer flex items-center justify-between gap-1"
        onClick={handleRename}
        onMouseEnter={() => setShowEdit((d) => !d)}
        onMouseLeave={() => setShowEdit((d) => !d)}
      >
        {rename ? (
          <input
            type="text"
            required
            autoFocus
            className="rounded text-black shadow-inner shadow-red-300 valid:shadow-green-300 outline-none"
            onBlur={handleRename}
            onChange={handleChange}
            value={newTitle}
          />
        ) : (
          <p className="w-[90%]">{list.title}</p>
        )}

        <div className="w-5 h-5" onClick={handleRename}>
          {showEdit && <BiEditAlt className="w-5 h-5" />}
        </div>
      </h2>
      {rename || (
        <button
          onClick={() => dispatch(deleteList(list))}
          className="hover:text-white text-white/50"
        >
          <BsTrash className="w-5 h-5" />
        </button>
      )}
    </header>
  );
}
