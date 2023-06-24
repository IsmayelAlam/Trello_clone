import { useState } from "react";
// import { AiOutlineHolder } from "react-icons/tb";
import {
  AiFillDelete,
  AiFillPlusSquare,
  AiOutlineCloseCircle,
  AiFillEdit,
  AiOutlineHolder,
} from "react-icons/ai";

import { deleteList, renameList } from "../../stores";
import { useDispatch } from "react-redux";

export default function TaskHeading({ list, collapse }) {
  const [expend, setExpend] = useState(false);
  const [rename, setRename] = useState(false);
  const [newTitle, setTitle] = useState(list.title);
  const dispatch = useDispatch();

  const handleChange = (e) => setTitle(e.target.value);
  const handleRename = (e) => {
    setRename(!rename);
    setExpend(false);
    dispatch(renameList({ id: list.id, newTitle }));
  };

  let listAction;
  let classes =
    "h-10 w-48 m-2 pl-10 text-center p-2 rounded bg-slate-700 flex items-center justify-start capitalize";

  if (expend)
    listAction = (
      <div className="absolute h-screen/2 bg-slate-800 rounded shadow z-10">
        <button className="m-2 p-1 w-48 flex justify-between capitalize">
          <span>list action</span>
          <AiOutlineCloseCircle
            className="h-7 w-7 cursor-pointer"
            onClick={setExpend.bind(null, !expend)}
          />
        </button>
        <hr />
        <button
          className={classes}
          onClickCapture={collapse}
          onClick={setExpend.bind(null, !expend)}
        >
          <AiFillPlusSquare className="h-7 w-7 cursor-pointer p-1" />
          <span>add Card</span>
        </button>

        <button className={classes} onClick={handleRename}>
          <AiFillEdit className="h-7 w-7 cursor-pointer p-1" />
          <span>Rename</span>
        </button>

        <button className={classes} onClick={() => dispatch(deleteList(list))}>
          <AiFillDelete className="h-7 w-7 cursor-pointer p-1" />
          <span>Delete</span>
        </button>
      </div>
    );

  return (
    <header className="flex p-2 items-center justify-between overflow-visible">
      <h2
        className="text-lg font-semibold capitalize px-4 rounded-lg"
        onClick={handleRename}
      >
        {rename ? (
          <input
            type="text"
            autoFocus
            className="rounded text-black"
            onBlur={handleRename}
            onChange={handleChange}
            value={newTitle}
          />
        ) : (
          list.title
        )}
      </h2>
      <div className="relative">
        <AiOutlineHolder
          className="h-7 w-7 cursor-pointer p-1 rounded hover:bg-slate-500"
          onClick={setExpend.bind(null, !expend)}
        />
        {listAction}
      </div>
    </header>
  );
}
