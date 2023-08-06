import { useState } from "react";

import {
  AiFillDelete,
  AiFillPlusSquare,
  AiOutlineCloseCircle,
  AiFillEdit,
  AiOutlineMore,
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
  let classes = {
    buttons:
      "h-10 w-48 m-2 pl-10 text-center p-2 rounded bg-slate-700 flex items-center justify-start capitalize",
    icon: "h-7 w-7 cursor-pointer p-1",
  };

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
          className={classes.buttons}
          onClickCapture={collapse}
          onClick={setExpend.bind(null, !expend)}
        >
          <AiFillPlusSquare className={classes.icon} />
          <span>add Card</span>
        </button>

        <button className={classes.buttons} onClick={handleRename}>
          <AiFillEdit className={classes.icon} />
          <span>Rename</span>
        </button>

        <button
          className={classes.buttons}
          onClick={() => dispatch(deleteList(list))}
        >
          <AiFillDelete className={classes.icon} />
          <span>Delete</span>
        </button>
      </div>
    );

  return (
    <header className="flex p-2 items-center justify-between overflow-visible">
      <h2
        className="text-lg font-semibold capitalize px-4 rounded-lg min-h-[1rem] cursor-pointer"
        onClick={handleRename}
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
          list.title
        )}
      </h2>
      <div className="relative">
        <AiOutlineMore
          className="h-7 w-7 cursor-pointer p-1 rounded hover:bg-slate-500"
          onClick={setExpend.bind(null, !expend)}
        />
        {listAction}
      </div>
    </header>
  );
}
